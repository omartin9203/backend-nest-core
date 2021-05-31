import { Result } from '../Result';
import { BaseError } from './BaseError';
import * as en from './internationalization/en.json';
import * as es from './internationalization/es.json';

/**
 * @desc General application errors (few of these as possible)
 * @http 500
 */
export namespace AppError {
  const _context = 'AppError';
  const messagesProvider = {
    en, es,
  }
  export class UnexpectedError extends BaseError {
    public constructor(readonly error?: Error) {
      super({
        name: 'UnexpectedError',
        context: _context,
        internationalization: {
          variables: {error: error?.message},
          messagesProvider,
        }
      });
    }
  }

  export type UnexpectedErrorResult<T> = Result<T, UnexpectedError>;

  export class TransactionalError extends BaseError {
    private readonly _brand?: TransactionalError;
    public constructor() {
      super({
        name: 'TransactionalError',
        context: _context,
        internationalization: {
          variables: {},
          messagesProvider,
        }
      });
    }
  }

  export type TransactionalErrorResult<T> = Result<T, ValidationError>;

  export class ValidationError extends BaseError {
    private readonly _brand?: ValidationError;
    public constructor(message: string) {
      super({
        name: 'ValidationError',
        message,
        context: _context,
        internationalization: {
          variables: {},
          messagesProvider,
        }
      });
    }
  }

  export type ValidationErrorResult<T> = Result<T, ValidationError>;
}
