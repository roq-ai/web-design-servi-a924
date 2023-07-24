import { ClientInterface } from 'interfaces/client';
import { GetQueryInterface } from 'interfaces';

export interface SubscriptionPlanInterface {
  id?: string;
  name: string;
  client_id?: string;
  created_at?: any;
  updated_at?: any;

  client?: ClientInterface;
  _count?: {};
}

export interface SubscriptionPlanGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  client_id?: string;
}
