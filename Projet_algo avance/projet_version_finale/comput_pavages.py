#Diallo 2018 Pavages

import pdb
import matplotlib.pyplot as plt
import matplotlib.patches as patches
import pylab
import numpy
import random
#import traceback
import sys
import time

def combiKparmiN(index, liste_selections, liste_items, results):

    if index==len(liste_selections):
        result=()
        
        for i in range(0, len(liste_selections)):
            result=result+(liste_items[liste_selections[i]],)
            
        results.append(result)
        
    else:
        start=0
        
        if(index>0):
            start=liste_selections[index-1]+1
            
        for i in range(start, len(liste_items)):
            liste_selections[index]=i
            
            combiKparmiN(index+1, liste_selections, liste_items, results)
            
            
            
    return 
    

    
def paves_valides(liste_paves, n, m): #exclus pave nxm

    new_liste_paves=[]
    
    for (P0, P1, P2, P3) in liste_paves:
        if ((P1[1]-P0[1])<m or (P3[0]-P1[0])<n):
            new_liste_paves.append((P0, P1, P2, P3))
        else:
            #print "pave non valide=> ",  (P0, P1, P2, P3)
            pass
    
    return new_liste_paves


def construit_list_points(ensemble1, ensemble2):
    liste_points=[(x,y) for x in ensemble1 for y in ensemble2]
    return liste_points
    
    
                
def pave_est_il_placable(pave, dic_points_Qi_occupes):
    (P0, P1, P2, P3)=pave
    
    largeur = P1[1]-P0[1]
    hauteur = P3[0]-P1[0] # ou  P2[0]-P0[0]
    
    placable=True
    
    if (dic_points_Qi_occupes[P0]):
        return False
    else:
        for Qi in dic_points_Qi_occupes:
            if((Qi[0]>=P0[0]) and (Qi[1]>=P0[1]) and dic_points_Qi_occupes[Qi]):
                if (((P0[0]+hauteur)>Qi[0]) or ((P0[1]+largeur)>Qi[1])):
                    placable=False
                    break
                else:
                    pass
            else:
                pass
                

        return placable
        
        
        
def place_pave(pave, dic_points_Qi_occupes):
    (P0, P1, P2, P3)=pave

    largeur = P1[1]-P0[1]
    hauteur = P3[0]-P1[0] # ou  P2[0]-P0[0]

    if (dic_points_Qi_occupes[P0]):
        raise Exception("{0} est deja occupe dans {1}".format(P0, dic_points_Qi_occupes))
        
    else:        
        for Qi in dic_points_Qi_occupes:
            if(Qi[0]>=P0[0] and Qi[1]>=P0[1]) :
                if (Qi[0]<(P0[0]+hauteur) and Qi[1]<(P0[1]+largeur)):
                    if(not dic_points_Qi_occupes[Qi]):
                        dic_points_Qi_occupes[Qi]=True
                    else:
                        raise Exception("{0} est deja occupe dans {1}".format(P0, dic_points_Qi_occupes))
                else:
                    pass
            else:
                pass
                
        return 
        

def unplace_pave(pave, dic_points_Qi_occupes):
    (P0, P1, P2, P3)=pave

    largeur = P1[1]-P0[1]
    hauteur = P3[0]-P1[0] # ou  P2[0]-P0[0]
    
    if (not dic_points_Qi_occupes[P0]):
        raise Exception("{0} nest pas occupe dans{1}".format(P0, dic_points_Qi_occupes))
        
    else:
        for Qi in dic_points_Qi_occupes:
            if(Qi[0]>=P0[0] and Qi[1]>=P0[1]):
                if (Qi[0]<(P0[0]+hauteur) and Qi[1]<(P0[1]+largeur)):
                    if(dic_points_Qi_occupes[Qi]):
                        dic_points_Qi_occupes[Qi]=False
                    else:
                        raise Exception("{0} nest pas occupe dans{1}".format(P0, dic_points_Qi_occupes))
                else:
                    pass
            else:
                pass
                
        return         

    
    
def pavage_est_il_plein(dic_points_Qi_occupes):
    rep=True
    for Qi in dic_points_Qi_occupes:
        if (not dic_points_Qi_occupes[Qi]):
            rep=False
            break
        else:
            pass
            
    return rep 
   
   

def pas_de_lignes_pointilles_completes_y(liste_paves, n):
    list_y_check=[0]*(n-1)
    
    for y in range(1, n):
        for (P0, P1, P2, P3) in liste_paves:
            if((P0[0]==y and P1[0]==y) or (P2[0]==y and P3[0]==y)):
                list_y_check[y-1]=1
                break
            else:
                pass
                
    
    if(list_y_check.count(1)==(n-1)):
        return True
    else:
        return False
        
        
        
def pas_de_lignes_pointilles_completes_x(liste_paves, m):
    list_x_check=[0]*(m-1)
    
    for x in range(1, m):
        for (P0, P1, P2, P3) in liste_paves:
            if((P0[1]==x and P2[1]==x) or (P1[1]==x and P3[1]==x)):
                list_x_check[x-1]=1
                break
            else:
                pass
                
    
    if(list_x_check.count(1)==(m-1)):
        return True
    else:
        return False    
    
    
def est_ce_une_solution(solution_partielle_a, n, m):
    if (pas_de_lignes_pointilles_completes_y(solution_partielle_a, n) and pas_de_lignes_pointilles_completes_x(solution_partielle_a, m)):
        #print "oui cest une SOLUTIONNNNNNNNNNNNNNNNNNNNNNNNNNNNN "
        return True
    else:
        #print "no ce nest pas une solution "
        return False

        
        
def construit_liste_de_potentiels_candidats(dic_points_Qi_occupes, liste_paves):

    liste_potentiels_candidats=[]
    
    for pave in liste_paves:
        if (pave_est_il_placable(pave, dic_points_Qi_occupes)):
            liste_potentiels_candidats.append(pave)
        else:
            pass
            
    return liste_potentiels_candidats
    
     
def procede_a_la_solution(solution_partielle_a, liste_de_tous_les_pavages_reduits):
    liste_de_tous_les_pavages_reduits.append(solution_partielle_a[:])
    return 
    
    
def depose_un_pave(solution_partielle_a, dic_points_Qi_occupes):
    place_pave(solution_partielle_a[-1], dic_points_Qi_occupes)
    return
    
def enleve_ce_meme_pave(solution_partielle_a, dic_points_Qi_occupes):
    unplace_pave(solution_partielle_a[-1], dic_points_Qi_occupes)
    return


def construit_tous_les_paves_possibles_rectangle_NxM(n, m):
    liste_results_combiKparmiN_y=[]
    liste_results_combiKparmiN_x=[]


    liste_points_axe_y=range(0, n+1) # N=len(the_list_items) =3
    liste_points_axe_x=range(0, m+1) # N=len(the_list_items) =3

    #liste_selections_pts=[5,6]  #les 2 premieres valeurs sont au hasard; K=len(liste_selections_pts) du debut = 2
    liste_selections_pts=[0,0]  #les 2 premieres valeurs sont au hasard; K=len(liste_selections_pts) du debut = 2
            
    combiKparmiN(0, liste_selections_pts, liste_points_axe_y, liste_results_combiKparmiN_y)
    combiKparmiN(0, liste_selections_pts, liste_points_axe_x, liste_results_combiKparmiN_x)

    # print "liste_results_combiKparmiN_y =>", liste_results_combiKparmiN_y
    # print "liste_results_combiKparmiN_x =>", liste_results_combiKparmiN_x

    liste_paves=[]

    #print ("P0", "P1", "P2", "P3")
    for y in liste_results_combiKparmiN_y:
        for x in liste_results_combiKparmiN_x:
            #print ((y[0],x[0]), (y[0],x[1]), (y[1],x[0]), (y[1],x[1]))
            liste_paves.append(((y[0],x[0]), (y[0],x[1]), (y[1],x[0]), (y[1],x[1])))

            
    return liste_paves
    


def dessine_un_seul_pave(pave, n, m):

    (P0, P1, P2, P3)=pave

    largeur = P1[1]-P0[1]
    hauteur = P3[0]-P1[0] # ou  P2[0]-P0[0]
    
    #print "P0 => ", P0 ,"largeur => ", largeur, "hauteur => ", hauteur

    fig1 = plt.figure()
    ax1 = fig1.add_subplot(111, aspect='equal')
    ax1.add_patch(patches.Rectangle(P0[::-1], largeur, hauteur, hatch='\\', fill=False)) #must flip P0 with [::-1] because (y,x) form

    ax1.set_xticks(numpy.arange(0, m+1, 1))
    ax1.set_yticks(numpy.arange(0, n+1, 1))

    plt.grid()
    plt.show()
    

def dessine_pavage(liste_paves, n, m):

    fig1 = plt.figure()
    ax1 = fig1.add_subplot(111, aspect='equal')

    list_hatch=['//', '*', '#', '!', '-']+range(100)
    list_hatch=['/', '|', '-', '+', 'x', 'o', 'O', '.', '*'][::-1]

    for (P0, P1, P2, P3) in liste_paves:
        largeur = P1[1]-P0[1]
        hauteur = P3[0]-P1[0] # ou  P2[0]-P0[0]
        ax1.add_patch(patches.Rectangle(P0[::-1], largeur, hauteur, hatch=random.choice(list_hatch), facecolor = random.choice(['g', 'r', 'c', 'm', 'y', 'k']), alpha=random.uniform(0, 1))) #must flip P0 with [::-1] because (y,x) form


    ax1.set_xticks(numpy.arange(0, m+1, 1))
    ax1.set_yticks(numpy.arange(0, n+1, 1))

    plt.grid()
    plt.show()
    
    
def initialisation(n, m, dessine=False):
    liste_paves=construit_tous_les_paves_possibles_rectangle_NxM(n, m)

    new_liste_paves=paves_valides(liste_paves, n, m)

    # print "============== new_liste_paves =============="
    # for (P0, P1, P2, P3) in new_liste_paves:
        # print (P0, P1, P2, P3)
        
    if(dessine):
        for un_pave in new_liste_paves:
            dessine_un_seul_pave(un_pave, n, m)

    else:
        pass
        
        
    dic_points_Qi_occupes={}
    liste_points_interieurs=construit_list_points(range(0,n) ,range(0,m))
    
    for point_interieur in liste_points_interieurs:
        dic_points_Qi_occupes[point_interieur]=False
        
    return new_liste_paves, dic_points_Qi_occupes


def backtrack(solution_partielle_a, n, m, dic_points_Qi_occupes, liste_paves, 
    liste_de_tous_les_pavages_reduits, liste_de_tous_les_pavages):
    
    if pavage_est_il_plein(dic_points_Qi_occupes):
        liste_de_tous_les_pavages.append(solution_partielle_a[:])
        if est_ce_une_solution(solution_partielle_a, n, m):
            procede_a_la_solution(solution_partielle_a, liste_de_tous_les_pavages_reduits)

        else:
            pass
            
    else:
        liste_potentiels_candidats=construit_liste_de_potentiels_candidats(dic_points_Qi_occupes, liste_paves)
        
        for candidat in liste_potentiels_candidats:  
            solution_partielle_a.append(candidat) # rajoute un pave a la solution partielle
            depose_un_pave(solution_partielle_a, dic_points_Qi_occupes)
            backtrack(solution_partielle_a, n, m, dic_points_Qi_occupes, liste_paves,
			liste_de_tous_les_pavages_reduits, liste_de_tous_les_pavages)
            enleve_ce_meme_pave(solution_partielle_a, dic_points_Qi_occupes)
            del solution_partielle_a[-1] # supprime dernier pave rajoutee a la solution partielle
            

    return   
    

def clean_pavages_doublons(liste_pavages):
    liste_pavages_doublons=[]
    new_liste_pavages=[]
    
    for i in range(0, len(liste_pavages)-1):
        for j in range(i+1, len(liste_pavages)):

            meme_pavage=True
            for pave_coords in liste_pavages[i]:
                if (pave_coords in liste_pavages[j]):
                    pass
                else:
                    meme_pavage=False
                    break
                    
            if(meme_pavage):
                liste_pavages_doublons.append(liste_pavages[j])
            else:
                pass
      
                      
    new_liste_pavages=[x for x in liste_pavages if x not in liste_pavages_doublons]
    
    return new_liste_pavages
    
    
def recup_liste_pavages_compactes(liste_de_tous_les_pavages_reduits):
    nb_paves_dun_pavage_compacte=min([len(sol) for sol in liste_de_tous_les_pavages_reduits])
    #print "nb_paves_dun_pavage_compacte=> ", nb_paves_dun_pavage_compacte

    liste_pavages_compactes=[solution for solution in liste_de_tous_les_pavages_reduits if len(solution)==nb_paves_dun_pavage_compacte]

    return liste_pavages_compactes

#affiche le nbre de pavage et le nombre de piece   
def affiche_stats_pavages(liste_pavages, text_a_rajouter=""):
    
    list_nb_paves=set() # pas de doublons possible
    
    for pavage in liste_pavages:
        list_nb_paves.add(len(pavage))
        
    for nb_paves in list_nb_paves:
        print "{0} avec {1} pieces".format(len([pvg for pvg in liste_pavages if len(pvg)==nb_paves]), nb_paves)
        
    print "(total de {0} pavages {1})".format(len(liste_pavages), text_a_rajouter)
    
    return
    
    
def print_usage(nom_prog, message):

    print message

    print "usage: python {0} n m u".format(nom_prog)
    print "     n : hauteur du rectangle (entier)"
    print "     m : largeur du rectangle (entier)"
    print "     u : en fonction de sa valeur affiche +/- d'infos"
    print "         | 0 : affiche le nombre de pavages compactes trouves"
    print "         | 1 : affiche le total de tous les pavages trouves"
    print "         | 2 : affiche les infos des options 0,1 et dessine les pavages compactes trouves"
    
    return
#=================================== main ================================#

if __name__ == "__main__":

    
    if(len(sys.argv)!=4):        
        print_usage(sys.argv[0], "mauvais usage")
        raw_input("appuyez sur <ENTREZ> pour quitter")
        sys.exit(2)
    else:
        pass
	#chrono du temps d'exection	  
	start_time = time.time()
    print ""
    print "      =====  DEBUT DU PROGRAMME ======      "
    print ""
    
    liste_de_tous_les_pavages=[] # comporte pavages reduits et non reduits
    liste_de_tous_les_pavages_reduits=[]

    var_n=int(sys.argv[1])
    var_m=int(sys.argv[2])
    
    vpartial_solution_a=[]

    new_liste_paves, dic_points_Qi_occupes = initialisation(var_n, var_m)

    backtrack([], var_n, var_m, dic_points_Qi_occupes, new_liste_paves, liste_de_tous_les_pavages_reduits, liste_de_tous_les_pavages)

    liste_de_tous_les_pavages=clean_pavages_doublons(liste_de_tous_les_pavages)
    liste_de_tous_les_pavages_reduits=clean_pavages_doublons(liste_de_tous_les_pavages_reduits)

    liste_pavages_compactes=recup_liste_pavages_compactes(liste_de_tous_les_pavages_reduits)

    
    if(int(sys.argv[3]) in [0,1,2]):
        if(int(sys.argv[3])==0):
            print "J ai trouve ({0}) pavages compacts".format(len(liste_pavages_compactes))
            
        elif(int(sys.argv[3])==1):
            print "Total des pavages :"
            affiche_stats_pavages(liste_de_tous_les_pavages, text_a_rajouter="")
            print ""
            print "      ==========================================         "
            print ""
            print "parmi lesquels on a les pavages reduits suivants :"
            affiche_stats_pavages(liste_de_tous_les_pavages_reduits, text_a_rajouter="reduits")
            print ""
            print "      ==========================================         "
            print ""
            print "Donc un total de ({0}) pavages compacts".format(len(liste_pavages_compactes))
        
        elif(int(sys.argv[3])==2):
            print "Total des pavages :"
            affiche_stats_pavages(liste_de_tous_les_pavages, text_a_rajouter="")
            print ""
            print "      ==========================================         "
            print ""
            print "parmi lesquels on a les pavages reduits suivants :"
            affiche_stats_pavages(liste_de_tous_les_pavages_reduits, text_a_rajouter="reduits")
            print ""
            print "      ==========================================         "
            print ""
            print "Donc un total de ({0}) pavages compacts".format(len(liste_pavages_compactes))    
            print ""
            print "      =====  dessin de pavages compactes ======      "
            print ""
            for num, solut in enumerate(liste_pavages_compactes):
                print "sol({0})=> ".format(num), solut
                dessine_pavage(solut, var_n, var_m)
                print "       =====================================       "
                
        else:
            pass

    else:
        print_usage(sys.argv[0], "troisieme arg u doit etre compris dans [0,1,2]")
        raw_input("appuyez sur <ENTREZ> pour quitter")
        sys.exit(2)

    print "--- Duree - %s seconds ---" %(time.time() - start_time)
    print ""
    print "      =====  FIN DU PROGRAMME ======      "
    print ""
    raw_input("appuyez sur <ENTREZ> pour quitter")
    sys.exit(0)



