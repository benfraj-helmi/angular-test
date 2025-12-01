import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetail } from './project-detail';

describe('ProjectDetail', () => {
  let component: ProjectDetail;
  let fixture: ComponentFixture<ProjectDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDetail);
    component = fixture.componentInstance;
    // provide a minimal project input to avoid template errors
    component.project = { name: 'Demo', tasks: [] };
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
