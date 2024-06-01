import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';
import { OrderStatus, OrderStatusList } from '../enums/order.enum';
import { IsEnum, IsOptional } from 'class-validator';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
    @IsEnum(OrderStatusList, {
      message: `Status must be one of ${OrderStatusList}`,
    })
    @IsOptional()
    status: OrderStatus;
}
