import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router:Router;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports:[RouterTestingModule],
      providers:[{
        provide:Router,
        useValue:{
          navigateByUrl:(link:String)=>{

          }
        }
      }]
      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    router=TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate',()=>{
    spyOn(router,'navigateByUrl').and.callThrough();
    component.navigateToModule('active');
    expect(router.navigateByUrl).toHaveBeenCalledWith('/active');
  });

  it('should navigate',()=>{
    spyOn(router,'navigateByUrl').and.callThrough();
    component.navigateToModule('deleted');
    expect(router.navigateByUrl).toHaveBeenCalledWith('/deleted');
  });

  it('should navigate',()=>{
    spyOn(router,'navigateByUrl').and.callThrough();
    component.navigateToModule('manage');
    expect(router.navigateByUrl).toHaveBeenCalledWith('/manage');
  });

});
