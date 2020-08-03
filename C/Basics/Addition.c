#include <stdio.h>
int main() {    

    int number1, number2, sum;
    
    printf("Enter two integers separated by single space: ");
    scanf("%d %d", &number1, &number2);

    // calculating sum
    sum = number1 + number2;
    printf("%d + %d = %d \n", number1, number2, sum);
    
    sum = number1 - number2;
    printf("%d - %d = %d", number1, number2, sum);
    return 0;
}