import { InputType, Field } from '@nestjs/graphql';
import {FieldOptions} from "../../domain/types/filters/IFieldOptions";

/**
 * Options to filter by a boolean object. You only can use a field at a time.
 *
 * @export
 * @class BooleanFieldOptions
 * @implements {IFieldOptions<boolean>}
 */
@InputType({
  description:
    'Options to filter by a boolean object. You only can use a field at a time.',
})
export class BooleanFieldOptions implements FieldOptions<boolean> {
  @Field(() => Boolean, { nullable: true })
  isNull?: boolean;
  @Field(() => Boolean, { nullable: true })
  is?: boolean;
  @Field(() => Boolean, { nullable: true })
  not?: boolean;
  @Field(() => [Boolean], { nullable: 'itemsAndList' })
  in?: boolean[];
  @Field(() => [Boolean], { nullable: 'itemsAndList' })
  notIn?: boolean[];
}
