import shortid from "shortid";

export default store => {
  console.log("Insert first list");
  const firstListId = shortid.generate();

  store.dispatch({
    type: "ADD_LIST",
    payload: { listId: firstListId, listTitle: "TASK QUEUE" }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: firstListId,
      cardId: shortid.generate(),
      cardText: "First card"
    }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: firstListId,
      cardId: shortid.generate(),
      cardText: "Second card"
    }
  });

  console.log("Insert second list");
  const secondListId = shortid.generate();

  store.dispatch({
    type: "ADD_LIST",
    payload: { listId: secondListId, listTitle: "IN PROGRESS" }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: secondListId,
      cardId: shortid.generate(),
      cardText: "Card 1"
    }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: secondListId,
      cardId: shortid.generate(),
      cardText: "Card 2"
    }
  });

  console.log("Insert Third list");
  const thirdListId = shortid.generate();

  store.dispatch({
    type: "ADD_LIST",
    payload: { listId: thirdListId, listTitle: "COMPLETED" }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: thirdListId,
      cardId: shortid.generate(),
      cardText: "Card 1"
    }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: thirdListId,
      cardId: shortid.generate(),
      cardText: "Card 2"
    }
  });
};
