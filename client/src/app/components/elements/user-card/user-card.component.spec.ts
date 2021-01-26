import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardComponent } from './user-card.component';

fdescribe('UserCardComponent', () => {

  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCardComponent ]
    })
			.compileComponents()
			.then(() => {
				fixture = TestBed.createComponent(UserCardComponent);
				component = fixture.componentInstance;
			});

	});

	it('Should create the component', () => {
		expect(component).toBeTruthy();
		console.log(component);
	})

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
