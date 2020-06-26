import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-searchbar",
  templateUrl: "./searchbar.page.html",
  styleUrls: ["./searchbar.page.scss"],
})
export class SearchbarPage implements OnInit {
  nome: string = "";
  pessoas: any;
  pessoasFiltradas: any;
  constructor(private navCtrl: NavController) {
    this.pessoas = [
      { id: 1, idade: 11, nome: "Fernando" },
      { id: 2, idade: 14, nome: "Mayara" },
      { id: 3, idade: 53, nome: "Neguinha" },
      { id: 4, idade: 12, nome: "Gatolino" },
      { id: 5, idade: 46, nome: "Sofia" },
      { id: 6, idade: 33, nome: "Julie" },
      { id: 7, idade: 23, nome: "Pitika" },
      { id: 8, idade: 16, nome: "Diana" },
      { id: 9, idade: 88, nome: "Chico" },
    ];
    this.pessoasFiltradas = this.pessoas;
  }

  filtrarItens(event) {
    this.nome = event.target.value.toLowerCase();
    this.pessoasFiltradas = this.filtrarPessoas(this.nome);
  }

  filtrarPessoas(nome) {
    this.pessoasFiltradas = this.pessoas;
    return this.pessoasFiltradas.filter((item) => {
      return item.nome.toLowerCase().includes(nome.toLowerCase());
    });
  }
  ngOnInit() {}
  showPageHome() {
    this.navCtrl.navigateForward("home");
  }
}
