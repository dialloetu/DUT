/*
 * tp_declaration.h
 * 
 * Copyright 2018 diallo  
 */
 
#ifndef H_TP_DECLARATION
#define H_TP_DECLARATION
#define NULL ((void *)0)
#define SIZE 100
#define File  "codes.txt"

typedef struct list list_list;
struct list *head = NULL;

void list_insertFirst(int cp, char *nVille); 
void list_printList(); 
int list_length();
void list_find(int cp);
void list_sort();
void list_reverse(struct list** head_ref);
int list_lectureFichier(); 
void list_detruit();
struct list* list_delete(int cp);
void list_tri(const char *arr[], int n); 
int list_getNumberFile(); 

#endif
