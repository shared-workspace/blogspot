import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { http } from '@utils/service';

@Injectable()
export class BloggerMiddleware implements NestMiddleware {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async use(req: Request, res: Response, next: NextFunction) {
    const bloggerUrl = req.originalUrl;
    try {
      if (bloggerUrl === '/') {
        const apiRes = await http.get('/blogs/' + process.env.BLOGGER_BLOG_ID); // eslint-disable-line
        if (apiRes.status !== 200) {
          return res.json({
            message:
              'Blogger API is not working Verify your API key, Blog ID and Blogger API Base URL',
          });
        }
        return res.json({ message: 'Blogger API is working fine' });
      }
    } catch (error) {
      return res.json({
        message:
          'Blogger API is not working Verify your API key, Blog ID and Blogger API Base URL',
      });
    }
    try {
      let response;
      switch (req.method) {
        case 'GET':
          response = await http.get(bloggerUrl);
          break;
        case 'POST':
          response = await http.post(bloggerUrl, req.body);
          break;
        case 'PUT':
          response = await http.put(bloggerUrl, req.body);
          break;
        case 'DELETE':
          response = await http.delete(bloggerUrl);
          break;
        default:
          throw new HttpException(
            'Method not allowed',
            HttpStatus.METHOD_NOT_ALLOWED,
          );
      }
      if (response.status !== 200) {
        throw new HttpException(
          response.data.message || 'Internal Server Error',
          response.status,
        );
      }
      res.json(response.data);
    } catch (error) {
      const status = error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR;
      throw new HttpException(
        error.response?.data || 'Internal Server Error',
        status,
      );
    }
  }
}
