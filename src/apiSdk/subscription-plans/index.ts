import axios from 'axios';
import queryString from 'query-string';
import { SubscriptionPlanInterface, SubscriptionPlanGetQueryInterface } from 'interfaces/subscription-plan';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSubscriptionPlans = async (
  query?: SubscriptionPlanGetQueryInterface,
): Promise<PaginatedInterface<SubscriptionPlanInterface>> => {
  const response = await axios.get('/api/subscription-plans', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createSubscriptionPlan = async (subscriptionPlan: SubscriptionPlanInterface) => {
  const response = await axios.post('/api/subscription-plans', subscriptionPlan);
  return response.data;
};

export const updateSubscriptionPlanById = async (id: string, subscriptionPlan: SubscriptionPlanInterface) => {
  const response = await axios.put(`/api/subscription-plans/${id}`, subscriptionPlan);
  return response.data;
};

export const getSubscriptionPlanById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/subscription-plans/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSubscriptionPlanById = async (id: string) => {
  const response = await axios.delete(`/api/subscription-plans/${id}`);
  return response.data;
};
