import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { BloggerMiddleware } from '@/middleware';
// import { AuthModule } from '@modules/auth/auth.module';
// import { PostsModule } from '@modules/posts/posts.module';
// import { UsersModule } from '@modules/users/users.module';
// import { CommentsModule } from '@modules/comments/comments.module';
// import { BlogModule } from './modules/blog/blog.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // AuthModule,
    // PostsModule,
    // UsersModule,
    // CommentsModule,
    // BlogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(BloggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
