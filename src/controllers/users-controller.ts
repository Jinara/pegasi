import { StatusCodes} from 'http-status-codes';
import { Controller, Get, Post, Put, Delete } from '@overnightjs/core';
import { Request, Response } from 'express';
import { UserService } from '../services/user-service';

@Controller('api/users')
export class UsersController {
  userService = new UserService();

  constructor(){
    this.userService.connect();
  }

  @Get(':id')
  private async get(req: Request, res: Response) {
    try {
      const user = await this.userService.getById(req.params.id);
      return res.status(StatusCodes.OK).json(user);
    } catch (err: any) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: err.message,
      });
    }
  }

  @Get('')
  private async getAll(req: Request, res: Response) {
    try {
      const users = await this.userService.getAll();

      console.log(req.query, true);
      return res.status(StatusCodes.OK).json(users);
    } catch (err: any) {
      console.log(err, true);
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: err.message,
      });
    }
  }

  @Post()
  private async insert(req: Request, res: Response) {
    try {
      const user = req.body;
      const obj = await this.userService.create(user);
      console.log(req.body, true);
      return res.status(StatusCodes.OK).json({ id: obj.insertedId });
    } catch (err: any) {
      console.log(err, true);
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: err.message,
      });
    }
  }

  @Put(':id')
  private async update(req: Request, res: Response) {
    try {
      const user = req.body;
      const ret = await this.userService.update(req.params.id,user);
      console.log('Body: ' + req.body, true);
      return res.status(StatusCodes.OK).json(ret);
    } catch (err: any) {
      console.log(err, true);
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: err.message,
      });
    }
  }

  @Delete(':id')
  private async delete(req: Request, res: Response) {
    try {
      const ret = await this.userService.delete(req.params.id);

      console.log('Delete: ' + req.params.id, true);
      return res.status(StatusCodes.OK).json(ret);
    } catch (err: any) {
      console.log(err, true);
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: err.message,
      });
    }
  }

  @Get(/ane/) // Rexes supported. Matches /lane, /cane, etc.
  public getAne(req: Request, res: Response): any {
    return res.status(StatusCodes.OK).json({
      message: '/ane/',
    });
  }

  @Get('practice/async')
  private async getWithAsync(req: Request, res: Response) {
    try {
      const asyncMsg = await this.asyncMethod(req);
      return res.status(StatusCodes.OK).json({
        message: asyncMsg,
      });
    } catch (err: any) {
      console.log(err, true);
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: err.message,
      });
    }
  }

  private asyncMethod(req: Request): Promise<string> {
    return new Promise((resolve) => {
      resolve(req.originalUrl + ' called');
    });
  }
}

export default UsersController;