import * as dayjs from 'dayjs';
import { IShipment } from 'app/entities/shipment/shipment.model';
import { IProductOrder } from 'app/entities/product-order/product-order.model';
import { InvoiceStatus } from 'app/entities/enumerations/invoice-status.model';
import { PaymentMethod } from 'app/entities/enumerations/payment-method.model';

export interface IInvoice {
  id?: number;
  date?: dayjs.Dayjs;
  details?: string | null;
  code?: string | null;
  status?: InvoiceStatus;
  paymentMethod?: PaymentMethod;
  paymentDate?: dayjs.Dayjs;
  paymentAmount?: number;
  shipments?: IShipment[] | null;
  order?: IProductOrder;
}

export class Invoice implements IInvoice {
  constructor(
    public id?: number,
    public date?: dayjs.Dayjs,
    public details?: string | null,
    public code?: string | null,
    public status?: InvoiceStatus,
    public paymentMethod?: PaymentMethod,
    public paymentDate?: dayjs.Dayjs,
    public paymentAmount?: number,
    public shipments?: IShipment[] | null,
    public order?: IProductOrder
  ) {}
}

export function getInvoiceIdentifier(invoice: IInvoice): number | undefined {
  return invoice.id;
}
