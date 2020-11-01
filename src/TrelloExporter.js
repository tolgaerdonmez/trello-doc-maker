export class TrelloExporter {
  trelloBoard = {};

  constructor(trelloBoard) {
    this.trelloBoard = trelloBoard;
  }

  #exportList = (list) => {
    const cards = this.trelloBoard.cards.filter(
      ({ idList }) => idList === list.id
    );

    return cards.map((card) => ({
      name: card.name,
      desc: card.desc,
      checklists: this.trelloBoard.checklists.filter(
        ({ idCard }) => idCard === card.id
      ),
    }));
  };

  exportLists = () => {
    const lists = this.trelloBoard.lists.map((list) => ({
      name: list.name,
      cards: this.#exportList(list),
    }));
    return lists;
  };
}
