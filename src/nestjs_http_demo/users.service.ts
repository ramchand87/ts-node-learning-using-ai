import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersService {
    constructor(private readonly httpService: HttpService) { }

    findAll(): Observable<any[]> {
        return this.httpService
            .get('https://jsonplaceholder.typicode.com/users')
            .pipe(
                map((response: AxiosResponse) => response.data),
            );
    }
}
