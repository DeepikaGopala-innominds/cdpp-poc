import {DefaultCrudRepository} from '@loopback/repository';
import {Project, ProjectRelations} from '../models';
import {MongodDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProjectRepository extends DefaultCrudRepository<
  Project,
  typeof Project.prototype.ID,
  ProjectRelations
> {
  constructor(
    @inject('datasources.mongod') dataSource: MongodDataSource,
  ) {
    super(Project, dataSource);
  }
}
