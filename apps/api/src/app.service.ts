import { Injectable } from "@nestjs/common";
import { createUsers, User } from "users";

@Injectable()
export class AppService {
  getHello(): User[] {
    return createUsers();
  }
}
