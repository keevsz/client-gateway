import { IsEnum, IsOptional } from "class-validator";
import { PaginationDto } from "src/common";
import { OrderStatus, OrderStatusList } from "../enums/order.enum";

export class OrderPaginationDto extends PaginationDto {
  
    @IsOptional()
    @IsEnum(OrderStatusList, { message: ` Valid values are: ${OrderStatusList}` })
    status?: OrderStatus;
}