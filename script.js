
window.onscroll=function(){

let scroll =
document.documentElement.scrollTop;

let height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;


let progress =
(scroll/height)*100;


document.getElementById("progressBar").style.width=
progress+"%";


}




function openGuideline(subject){


let file="";



if(subject==="anatomy"){

file="guideline/anatomy.pdf";

}


else if(subject==="physiology"){


file="guideline/physiology.pdf";


}


else if(subject==="biochemistry"){


file="guideline/biochemistry.pdf";


}




window.open(file,"_blank");



}
const anatomyQuestions = [


{

question:
"Which bone forms the forehead?",


options:
[
"Femur",
"Frontal bone",
"Radius",
"Ulna"
],


answer:1


},




{

question:
"How many cervical vertebrae are present?",


options:
[
"5",
"7",
"12",
"14"
],


answer:1


},




{

question:
"The largest bone in human body is?",


options:
[
"Tibia",
"Femur",
"Humerus",
"Fibula"
],


answer:1


}


];
const physiologyQuestions=[


{

question:
"Normal resting heart rate in adult is?",


options:
[
"20-40 bpm",
"60-100 bpm",
"120-150 bpm",
"160-200 bpm"
],


answer:1


},



{

question:
"Functional unit of kidney is?",


options:
[
"Neuron",
"Nephron",
"Alveoli",
"Hepatocyte"
],


answer:1

}



];const biochemistryQuestions=[


{

question:
"Basic unit of protein is?",


options:
[
"Glucose",
"Fatty acid",
"Amino acid",
"Nucleotide"
],


answer:2


},



{

question:
"DNA stands for?",


options:
[
"Deoxyribonucleic acid",
"Dinucleic acid",
"Double nitrogen acid",
"None"
],


answer:0


}


];
