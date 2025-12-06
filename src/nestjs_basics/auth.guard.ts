import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest<Request>();
        const authHeader = request.headers['authorization'];

        // Simple check: Authorization: secret_token
        if (authHeader === 'secret_token') {
            return true;
        }

        // Using UnauthorizedException is better practice than just returning false often,
        // as it provides a clearer 401 error. 
        // However, returning false produces a 403 Forbidden by default in NestJS guards.
        // Let's stick to standard Guard behavior: return false -> 403. 
        // If we want 401, we throw exception. 
        // Let's create a clear distinction for learning.

        // return false; // This would result in 403 Forbidden

        throw new UnauthorizedException('Invalid or missing token');
    }
}
