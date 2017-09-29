import { HeroService } from './../hero-service/hero.service';
import { DashboardComponent } from './dashboard.component';

fdescribe('DashboardComponent', () => {
  let component: DashboardComponent;
  let heroService : HeroService;

  beforeEach(() => {
    component = new DashboardComponent(heroService);
    component.ngOnInit();
  });


  it('should be created title', () => {
    expect(component.title).toBeDefined()
  });
});
