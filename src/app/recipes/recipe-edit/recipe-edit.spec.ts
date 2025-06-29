import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeEditComponent } from './recipe-edit';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { RecipeService } from '../../core/recipe';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RecipeEditComponent', () => {
  let component: RecipeEditComponent;
  let fixture: ComponentFixture<RecipeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipeEditComponent],
      imports: [FormsModule, HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: { id: '1' } } }
        },
        {
          provide: Router,
          useValue: { navigate: jasmine.createSpy('navigate') }
        },
        {
          provide: RecipeService,
          useValue: {
            getOne: () => of({
              id: '1',
              title: 'Pasta',
              description: 'Delicious pasta',
              calories: 200,
              protein: 15,
              allergies: 'None'
            }),
            update: () => of({})
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load recipe on init', () => {
    expect(component.recipe.title).toBe('Pasta');
  });
});
