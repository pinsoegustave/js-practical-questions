#include <stdio.h>

void printWordWithStars(const char *word) {
    while (*word) {
        printf("%c*", *word);
        word++;
    }
    printf("\n");
}

int main() {
    char word[100];
    
    printf("Enter a word: ");
    scanf("%s", word);
    
    printf("Output: ");
    printWordWithStars("KIGALI");
    
    return 0;
}
