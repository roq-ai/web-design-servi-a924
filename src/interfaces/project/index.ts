import { ClientInterface } from 'interfaces/client';
import { ProjectManagerInterface } from 'interfaces/project-manager';
import { GetQueryInterface } from 'interfaces';

export interface ProjectInterface {
  id?: string;
  name: string;
  status: string;
  client_id?: string;
  project_manager_id?: string;
  created_at?: any;
  updated_at?: any;

  client?: ClientInterface;
  project_manager?: ProjectManagerInterface;
  _count?: {};
}

export interface ProjectGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  status?: string;
  client_id?: string;
  project_manager_id?: string;
}
