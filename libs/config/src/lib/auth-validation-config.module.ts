import {
    PipeTransform,
    Injectable,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { ArraySchema, ObjectSchema } from 'joi';

@Injectable()
export class AuthValidationPipe implements PipeTransform {
    constructor(private schema: ObjectSchema | ArraySchema) { }

    transform<T>(data: T) {
        const { error, value } = this.schema.validate(data);
        if (error) {
            throw new HttpException(
                {
                    code: HttpStatus.BAD_REQUEST,
                    message: error.message || 'Validation Failed',
                    error,
                },
                HttpStatus.BAD_REQUEST
            );
        }
        return value;
    }
}
