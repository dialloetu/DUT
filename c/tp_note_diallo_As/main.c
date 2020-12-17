/*
 * main.c
 * 
 * Copyright 2018 diallo
 * 
 */


#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "tp_definition.c"


int main() {

   list_lectureFichier();
   printf("\n\nRecherche et Affichage : \n\n");
   printf(" saisir le code Postal  : \t ");
   int cp;
   scanf("%d", &cp);
   list_find(cp);
   printf("\n\n");
   printf("\n");
   list_sort();
   list_reverse(&head);
   list_printList();
   list_detruit();
   list_printList();
	
   return 0;
}
 

