import { ProjectInterface } from 'interfaces/project';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ProjectManagerInterface {
  id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  project?: ProjectInterface[];
  user?: UserInterface;
  _count?: {
    project?: number;
  };
}

export interface ProjectManagerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
}
