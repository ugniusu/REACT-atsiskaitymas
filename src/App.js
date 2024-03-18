const seaPlaners = [
  { id: 1, type: "man", name: "Linas", color: "blue" },
  { id: 2, type: "car", name: "Opel", color: "red" },
  { id: 3, type: "animal", name: "Vilkas", color: "green" },
  { id: 4, type: "fish", name: "Ungurys", color: "yellow" },
  { id: 5, type: "man", name: "Tomas", color: "green" },
  { id: 6, type: "animal", name: "Bebras", color: "red" },
  { id: 7, type: "animal", name: "Barsukas", color: "green" },
  { id: 8, type: "car", name: "BMW", color: "blue" },
  { id: 9, type: "car", name: "ZIL", color: "red" },
  { id: 10, type: "man", name: "Teta Zita", color: "yellow" },
];

function App() {
  return (
    <div>
      <Bala />;
      <Daiktas ex="Uzduotis nr. 2" props="odd" />
      <Daiktas props="even" />
      <Jura />
      <Vandenynas />
      <Pasaulis />
    </div>
  );
}

/////////////////////////////////////
// 1.
function Bala() {
  const seaCopy = seaPlaners;
  return (
    <div>
      {seaCopy.map((e) => (
        <p key={e.id}>
          <strong>ID:</strong> {e.id} <strong>Type:</strong> {e.type}{" "}
          <strong>Name:</strong> {e.name} <strong>Color: </strong>
          {e.color}
        </p>
      ))}
    </div>
  );
}

/////////////////////////////////////
// 2.
function Tvenkinys() {
  return (
    <div>
      <Daiktas />
      <Daiktas />
    </div>
  );
}

function Daiktas({ props, ex }) {
  const seaCopy = seaPlaners;

  return (
    <div>
      <h1>{ex}</h1>
      {seaCopy.map((e) => {
        if (
          (props === "even" && e.id % 2 === 0) ||
          (props === "odd" && e.id % 2 !== 0)
        ) {
          return (
            <p key={e.id}>
              <strong>{e.id}:</strong> {e.name}
            </p>
          );
        }
        return null;
      })}
    </div>
  );
}

/////////////////////////////////////
// 3.

function Jura() {
  const seaCopy = seaPlaners;
  return (
    <div>
      {seaCopy.map((e) => {
        if (e.type === "man")
          return <Valtis key={e.id} text="Valtis comp" name={e.name} />;
        if (e.type === "car")
          return <Laivas key={e.id} text="Laivas comp" name={e.name} />;
        if (e.type === "animal") return <Sala key={e.id} name={e.name} />;
        if (e.type === "animal") return <p key={e.id}>Name: {e.name}</p>;
      })}
    </div>
  );
}

function Valtis({ name }) {
  return (
    <div>
      <p>
        <strong>Name:</strong> {name}
      </p>
    </div>
  );
}

function Laivas({ name }) {
  return (
    <div>
      <p>
        <strong>Name:</strong> {name}
      </p>
    </div>
  );
}

function Sala({ name }) {
  return (
    <div>
      <p>
        <strong>Name:</strong> {name}
      </p>
    </div>
  );
}

/////////////////////////////////////
// 4.

function Vandenynas() {
  return (
    <div>
      <Tipas />
      <Vardas />
      <Spalva />
    </div>
  );
}

function Tipas() {
  const seaCopy = seaPlaners;
  const sortByType = seaCopy.sort((a, b) => {
    if (a.type < b.type) {
      return -1;
    }
    if (a.type > b.type) {
      return 1;
    }
  });

  return (
    <div>
      {seaCopy.map((e) => (
        <p key={e.id}>
          <strong>ID:</strong> {e.id} <strong>Type:</strong> {e.type}
          <strong>Name:</strong> {e.name} <strong>Color: </strong>
          {e.color}
        </p>
      ))}
    </div>
  );
}

function Vardas() {
  const seaCopy = seaPlaners;
  const sortByName = seaCopy.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
  });
  console.log(sortByName);

  return (
    <div>
      <h2>-----</h2>
      {seaCopy.map((e) => (
        <p key={e.id}>
          <strong>ID:</strong> {e.id} <strong>Type:</strong> {e.type}
          <strong>Name:</strong> {e.name} <strong>Color: </strong>
          {e.color}
        </p>
      ))}
    </div>
  );
}

function Spalva() {
  const seaCopy = seaPlaners;
  const sortByName = seaCopy.sort((a, b) => {
    if (a.color < b.color) {
      return -1;
    }
    if (a.color > b.color) {
      return 1;
    }
  });

  return (
    <div>
      <h2>-----</h2>
      {seaCopy.map((e) => (
        <p key={e.id}>
          <strong>ID:</strong> {e.id} <strong>Type:</strong> {e.type}
          <strong>Name:</strong> {e.name} <strong>Color: </strong>
          {e.color}
        </p>
      ))}
    </div>
  );
}

////////////////////////////////////
// 5.

function Pasaulis() {
  const color = "purple";
  return (
    <div>
      <h1>Pasaulis</h1>
      <Gyventojai seaPlaners={seaPlaners} color={color} />
    </div>
  );
}

function Gyventojai({ seaPlaners, color }) {
  const colorsData = seaPlaners.filter((resident) => resident.color === color);

  const renderData = colorsData.length > 0 ? colorsData : seaPlaners;

  return (
    <div>
      <h2>Gyventojai</h2>
      <ul>
        {renderData.map((resident) => (
          <li key={resident.id}>
            <strong>Name:</strong> {resident.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
