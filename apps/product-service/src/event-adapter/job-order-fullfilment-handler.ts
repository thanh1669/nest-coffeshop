import { JobConfig } from '@app/common/models';
import { RabbitEventService } from '@app/common/services';
import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from "@nestjs/microservices";

@Controller()
export class JobOrderFulllfilmentHandler {
    constructor(
        private rabbitEvent: RabbitEventService
    ) { }

    @EventPattern(JobConfig.ORDER_FULLFILMENT)
    handler(@Payload() data: any, @Ctx() context: RmqContext) {
        console.log('Product Service Handler Order Fullfilment', data);
        this.rabbitEvent.ack(context);
    }
}