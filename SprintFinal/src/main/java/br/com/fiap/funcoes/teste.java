package br.com.fiap.funcoes;

import java.util.ArrayList;
import java.util.Collections;

public class teste {

	public static void main(String[] args) {
		
		// Criar um ArrayList com algumas strings
        ArrayList<String> lista = new ArrayList<>();
        lista.add("S");
        lista.add("E");
        lista.add("G");
        lista.add("E");
        lista.add("E");
        lista.add("S");

        // String que voc� deseja contar
        String elementoParaContar = "S";

        // Usar o m�todo frequency para contar as ocorr�ncias do elemento
        int contador = Collections.frequency(lista, elementoParaContar);

        // Exibir o resultado
        System.out.println("A quantidade de '" + elementoParaContar + "' no ArrayList �: " + contador);
        
        int[] numeroTipo = {3, 2, 1};
        
        for(int i : numeroTipo) {
        	
        	System.out.println(numeroTipo[i-1]);
        }
		
		
	}

}
