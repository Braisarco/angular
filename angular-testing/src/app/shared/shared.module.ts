import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    // Componentes compartidos
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // Otros módulos comunes
  ],
  exports: [
    // Todo lo que quieras exportar
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // Componentes compartidos
  ]
})
export class SharedModule {}