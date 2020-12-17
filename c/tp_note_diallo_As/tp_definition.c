/*
 * tp_definition.c
 * 
 * Copyright 2018 diallo
 * 
 */
 
#include <stdio.h>
#include <stdlib.h>
#include <errno.h>
#include <string.h>
#include <stdbool.h>
#include "tp_declaration.h"


struct list {
   int codePostal;
   char ville[SIZE];
   struct list *next;
};

void list_printList() {
   struct list *ptr = head;
   printf("\n\n Affichage de la liste \n\n");
	
   while(ptr != NULL) {
      printf("(%d,%s) \n",ptr->codePostal,ptr->ville);
      ptr = ptr->next;
   }
   printf("\n Fin Affichage de la liste \n\n ");
}

void list_insertFirst(int cp, char *nVille) {
   struct list *link = (struct list*) malloc(sizeof(struct list));
   link->codePostal = cp;
   strcpy( link->ville, nVille);
   link->next = head;
   head = link;
}

bool list_isEmpty() {
   return head == NULL;
}

int list_length() {
	struct list *current = NULL;
   int length = 0;
	
   for(current = head; current != NULL; current = current->next) {
      length++;
   }
   return length;
}

static int compare(const void * a, const void * b)
{
    return strcmp(*(const char **) a, *(const char **) b);
}

void list_tri(const char *arr[], int n)
{
    qsort(arr, n, sizeof (const char *), compare);
}

void list_find(int cp) {

   int compteur = 0;
   const char *tmp[SIZE];
   if(head==NULL) {
      printf("La liste n'a pas été initialisé ");
      return;
   } 
   struct list* current = head;
   
   printf(" Code Postal recherche : %d ==> \n ",cp);
   while(current!=NULL) {
      if(current->codePostal == cp) {
		  tmp[compteur] = current->ville;
         compteur++;
      }
      if(current->next != NULL)
         current = current->next;
      else
         break;
   }
     printf(" Il y a %d résultat(s) pour la recherche de %d ==> : \n\n", compteur, cp); 
     list_tri(tmp, compteur);
     int i;
     for (i = 0; i < compteur; i++)
        printf("%s \n",tmp[i]);
   
}

void list_sort() {
   int i, j, k, tempKey, tempData;
   struct list *current;
   struct list *next;
	
   int size = list_length();
   k = size ;
	
   for ( i = 0 ; i < size - 1 ; i++, k-- ) {
      current = head;
      next = head->next;
		
      for ( j = 1 ; j < k ; j++ ) {   
		
         if ( current->codePostal > next->codePostal ) {
            tempData = current->codePostal;
            current->codePostal = next->codePostal;
            next->codePostal = tempData;

            tempKey = current->codePostal;
            current->codePostal = next->codePostal;
            next->codePostal = tempKey;
         }
			
         current = current->next;
         next = next->next;
      }
   }   
}


int list_lectureFichier()
{
	FILE* fichier;
	char ligne[SIZE];
	list_list list_var;
	int nblines = list_getNumberFile();
    int i = 0;
    fichier = fopen(File, "r");
    if (fichier == NULL)
    {
       puts("Pb d'ouverture du fichier  !");
        exit(0);
    }
    printf("Chargement du fichier en cours, veuiller patienter ... \n ");
    printf(" %d /100 [", i); 
    while ( fgets(ligne, SIZE, fichier) != NULL )
    {
        if (sscanf(ligne,"%s%d", list_var.ville, &(list_var.codePostal))== 2) 
        {
			list_insertFirst(list_var.codePostal, list_var.ville);			
            if(i%1000==0 && i<nblines){
			    printf("|");
		    }
			i=i+1;
       }
        else{
			printf("Pb de lecture avec sscanf (format de ligne incorrect ?)") ;
		}		
    }
    if(i==nblines){
		i = 100;
		 printf("] %d /100 \n",i);
		 printf(" Chargement du fichier termine \n");
	}
    fclose(fichier) ;
    return 0;
}

int list_getNumberFile(){
	FILE* fichier;
	int ch=0;
    int lines=0;
	fichier = fopen(File, "r");
    if (fichier == NULL)
    {
       puts("Pb d'ouverture du fichier  !");
        exit(0);
    }
	while(!feof(fichier))
	{
	  ch = fgetc(fichier);
	  if(ch == '\n')
	  {
		lines++;
	  }
	}
	return lines;
}

void list_reverse(struct list** head_ref) {
   struct list* prev   = NULL;
   struct list* current = *head_ref;
   struct list* next;
	
   while (current != NULL) {
      next  = current->next;
      current->next = prev;   
      prev = current;
      current = next;
   }
	
   *head_ref = prev;
}

struct list* list_delete(int cp) {

   struct list* current = head;
   struct list* previous = NULL;
	
   if(head == NULL) {
      return NULL;
   }
   while(current->codePostal != cp) {

      if(current->next == NULL) {
         return NULL;
      } else {
         previous = current;
         current = current->next;
      }
   }
   if(current == head) {
      head = head->next;
   } else {
      previous->next = current->next;
   }    
	
   return current;
}

struct list* list_deleteFirst() {

   struct list *tempLink = head; 
   head = head->next;
   return tempLink;
}

void list_detruit()
{
	printf("\nVeuillez patienter, Suppression termine ....  ");
	  while(!list_isEmpty()) {            
      struct list *temp = list_deleteFirst();
      //printf("(%d,%s) ",temp->codePostal,temp->ville);
      free(temp);
    }
    free(head);
    printf("\nSuppression termine ! ");
}
