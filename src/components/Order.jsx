import { useState } from "react";

export default function OrderPizza() {
  const [size, setSize] = useState("");
  const [crust, setCrust] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const ingredientList = [
    "Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara",
    "Soğan", "Domates", "Mısır", "Sucuk", "Jalepeno", "Sarımsak",
    "Biber", "Ananas", "Kabak"
  ];

  const toggleIngredient = (item) => {
    if (ingredients.includes(item)) {
      setIngredients(ingredients.filter((i) => i !== item));
    } else if (ingredients.length < 10) {
      setIngredients([...ingredients, item]);
    }
  };

  const basePrice = 85.5;
  const extraPrice = ingredients.length * 5;
  const total = (basePrice + extraPrice) * quantity;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-red-600 text-white p-4 text-center text-2xl font-bold">Teknolojik Yemekler
        <h5>
          Anasayfa - Seçenekler - <strong>Sipariş Oluştur</strong>
        </h5>
      </header>

      <main className="max-w-4xl mx-auto p-6 bg-white mt-6 rounded shadow">
        <h1 className="text-xl font-semibold">Position Absolute Acı Pizza</h1>
        <p className="text-gray-600 mt-2">{basePrice}₺</p>
        <p className="text-gray-500 my-4">
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle tuvarlak, mayalı buğday bazlı hamurlu İtalya kökenli bir yemektir.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="font-medium">Boyut Seç <span className="text-red-500">*</span></h2>
            {["Küçük", "Orta", "Büyük"].map((s) => (
              <label key={s} className="block">
                <input
                  type="radio"
                  name="size"
                  value={s}
                  checked={size === s}
                  onChange={() => setSize(s)}
                  className="mr-2"
                />
                {s}
              </label>
            ))}
          </div>

          <div>
            <h2 className="font-medium">Hamur Seç <span className="text-red-500">*</span></h2>
            <select
              value={crust}
              onChange={(e) => setCrust(e.target.value)}
              className="border rounded p-1 w-full"
            >
              <option value="">Hamur Kalınlığı</option>
              <option value="İnce">İnce</option>
              <option value="Orta">Orta</option>
              <option value="Kalın">Kalın</option>
            </select>
          </div>
        </div>

        <h2 className="font-medium mt-6">Ek Malzemeler (5₺)</h2>
        <p className="text-gray-400 text-sm mb-2">En fazla 10 malzeme seçebilirsiniz.</p>
        <div className="grid grid-cols-3 gap-2">
          {ingredientList.map((item) => (
            <label key={item} className="flex items-center">
              <input
                type="checkbox"
                checked={ingredients.includes(item)}
                onChange={() => toggleIngredient(item)}
                className="mr-2"
              />
              {item}
            </label>
          ))}
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium mb-1">Sipariş Notu</label>
          <input
            type="text"
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            className="w-full border rounded p-2"
          />
        </div>

        <div className="mt-6 flex items-center gap-2">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="px-2 py-1 bg-yellow-400 rounded"
          >-
          </button>
          <span className="font-medium">{quantity}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="px-2 py-1 bg-yellow-400 rounded"
          >+
          </button>
        </div>

        <div className="mt-6 p-4 border rounded bg-gray-50">
          <div className="flex justify-between mb-2">
            <span>Seçimler</span>
            <span>{extraPrice.toFixed(2)}₺</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Toplam</span>
            <span>{total.toFixed(2)}₺</span>
          </div>
        </div>

        <button className="w-full mt-4 bg-yellow-400 py-2 rounded font-medium hover:bg-yellow-500">
          SİPARİŞ VER
        </button>
      </main>
    </div>
  );
}
