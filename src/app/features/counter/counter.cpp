//
// Created by toruitas on 3/17/20.
//


int add(int a, int b){
    return a + b;
}

int subtract(int a, int b){
    return a-b;
}

int square(int i){
    return i*i;
}

int fibonacci(int i){
    if (i<2){ return 1; };
    return fibonacci(i-1) + fibonacci(i - 2);
}

int factorial(int i){
    if(i<1){ return 1; };
    return i * factorial(i-1);
}