import { InputType, Field, Int } from '@nestjs/graphql';
import { PageParamsDto } from '../../domain/PaginatorParams';

/**
 * Pagination configuration for findAll queries.
 *
 * @export
 * @abstract
 * @class PaginatorParams
 */
@InputType({ description: 'Pagination configuration for findAll queries.' })
export class PageParamsInput implements PageParamsDto {
  @Field(() => Int, { defaultValue: 1 }) pageNum: number;
  @Field(() => Int, { defaultValue: 10 }) pageLimit: number;
}
