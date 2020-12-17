#include <stdio.h>
#include <stdlib.h>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */
int string_cpt(char ch[]);
void copy(char dest[], char src[]);

int main(int argc, char *argv[]) {
	char chaine[64];
	char dest[64];
	strcpy(chaine, "un bon test !");
	printf("%d\n", string_cpt(chaine));
	copy(dest, chaine);
	printf("%s\n", dest);
	return 0;
}

int string_cpt(char ch[]){
	int i=0;
	while(ch[i] != '\0'){
		i++;
	}
	return i;
}

void copy(char dest[], char src[]){
	int i = 0;
	while(i < string_cpt(src)){
		dest[i] = src[i];
		i++;
	} 
}
