import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeAddComponent } from './recipe-add';
import { FormsModule } from '@angular/forms';
import { RecipeService } from '../../core/recipe';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('RecipeAddComponent', () => {
  let component: RecipeAddComponent;
  let fixture: ComponentFixture<RecipeAddComponent>;
  let recipeServiceSpy: jasmine.SpyObj<RecipeService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    // Create spies for the services
    const recipeServiceMock = jasmine.createSpyObj('RecipeService', ['add']);
    const routerMock = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [RecipeAddComponent],
      imports: [FormsModule],
      providers: [
        { provide: RecipeService, useValue: recipeServiceMock },
        { provide: Router, useValue: routerMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeAddComponent);
    component = fixture.componentInstance;

    // Assign spies for use in tests
    recipeServiceSpy = TestBed.inject(RecipeService) as jasmine.SpyObj<RecipeService>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;

    fixture.detectChanges();
  });

  it('should create the RecipeAddComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should call recipeService.add() and navigate on successful add', () => {
    // Arrange
    recipeServiceSpy.add.and.returnValue(of({ message: 'Recipe added' }));

    component.recipe = {
      title: 'Test Recipe',
      description: 'Test Description',
      calories: 100,
      protein: 10,
      allergies: 'None'
    };

    // Act
    component.addRecipe();

    // Assert
    expect(recipeServiceSpy.add).toHaveBeenCalledWith(component.recipe);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/recipes']);
  });
});

