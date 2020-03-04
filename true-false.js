//true => '0','name',[]
//false => 0; undefined(;), NaN, null, false

let name = 0;
if(name || name==0){
    console.log("condition is true");

}
else{
    console.log("condition is false");
}