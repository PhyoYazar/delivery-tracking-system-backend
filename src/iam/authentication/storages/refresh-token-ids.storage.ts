import {
  Injectable,
  OnApplicationBootstrap,
  OnApplicationShutdown,
} from '@nestjs/common';
import { Redis } from 'ioredis';

// as the best practice, we should separate 2 classes as one class per file
export class InvalidatedRefreshTokenError extends Error {}

@Injectable()
export class RefreshTokenIdsStorage
  implements OnApplicationBootstrap, OnApplicationShutdown
{
  private redisClient: Redis;

  onApplicationBootstrap() {
    //TODO: Ideally we should move this to the dedicated 'RedisModule'
    // instead of initiating the connection here
    this.redisClient = new Redis(
      'rediss://red-cj37ag98g3n1jkhtsp8g:66GcYMRsqgQ6oLCpCHtHAkhXaICHmuOM@singapore-redis.render.com:6379',
    );

    // this.redisClient = new Redis({
    //   host: 'localhost', // should use environment variable
    //   port: 6379, // should use environment variable
    // });

    // this.redisClient = new Redis({
    //   host: 'singapore-redis.render.com',
    //   port: 6379,
    //   username: 'red-cj37ag98g3n1jkhtsp8g',
    //   password: '66GcYMRsqgQ6oLCpCHtHAkhXaICHmuOM',
    //   // tls: {},
    // });
  }

  onApplicationShutdown(signal?: string) {
    return this.redisClient.quit();
  }

  async insert(userId: string, tokenId: string): Promise<void> {
    await this.redisClient.set(this.getKey(userId), tokenId);
  }

  async validate(userId: string, tokenId: string): Promise<boolean> {
    const storedId = await this.redisClient.get(this.getKey(userId));

    if (storedId !== tokenId) {
      throw new InvalidatedRefreshTokenError();
    }

    return storedId === tokenId;
  }

  async invalidate(userId: string): Promise<void> {
    await this.redisClient.del(this.getKey(userId));
  }

  private getKey(userId: string): string {
    return `user-${userId}`;
  }
}
