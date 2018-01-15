import { Component, OnInit } from '@angular/core';
import { Exercise } from '../../../shared/exercise.model';
import { ExercisesService } from '../../exercises.service';
import {
  Router,
  ActivatedRoute,
  Params } from '@angular/router';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-exercises-detail',
  templateUrl: './exercises-detail.component.html',
  styleUrls: ['./exercises-detail.component.css']
})
export class ExercisesDetailComponent implements OnInit {

  exercise: Exercise;
  id: number;
  cat: any;
  form: any;

  rename: string;
  newImgUrl: string;
  newDescription: string;

  editMode = false;

  constructor(private exercisesService: ExercisesService,
              private router: Router,
              private route: ActivatedRoute ) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.cat = params['cat'];
          this.exercise = this.exercisesService.getExercisesById(this.cat, this.id);
        });
  }

  onAddExerciseToWorkoutPlan(exercise: Exercise) {
    this.exercisesService.addExercisesToWorkoutDraftList(exercise);
  }

  editModeToggle() {
    this.editMode = !this.editMode;
    this.rename = this.exercise.name;
    this.newImgUrl = this.exercise.imagePath
    this.newDescription = this.exercise.desc
  }

  onEditExercise(form: FormGroup) {
    console.log(form);
    this.form = new Exercise (
      form.value.name.trim(),
      form.value.description,
      'back',
      form.value.imgUrl
    );

    this.exercisesService.editExercise(this.exercise, this.form);

    // form.reset();
  }
  onRemoveExercise(name: string) {
    this.exercisesService.removeExerciseFromList(name);
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
