import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateFacultyDto {

    @IsString()
    @IsNotEmpty()
    id :string 
      @IsString()
    @IsNotEmpty()
    name :string
      @IsString()
    @IsNotEmpty()
    experties :string 
    @IsNumber()
    noOfPublication :number 
}
