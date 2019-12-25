const inventory = {
    items: ["Монорельса", "Фильтр"],
    add(itemName) {
        console.log(`Adding ${itemName} to inventory`);

        this.items.push(itemName);
    },
    remove(itemName) {
        console.log(`Removing ${itemName} from inventory`);

        this.items = this.items.filter((item) => item !== itemName);
    }
};

const invokeInventoryAction = function (itemName, action) {
    console.log(`Invoking action on ${itemName}`);
    action(itemName);
};

const invokeInventoryOperation = function invokeInventoryOperation(
    itemName,
    inventoryAction
) {
    console.log(
        `Invoking ${inventoryAction.name} opeartion on ${itemName}`
    );
    inventoryAction.call(this, itemName);
};

//Создаю копию функции add и remove. С навсегда привязаным контекст из обьекта inventory.
// Как то так :)
const boundAdd = inventory.add.bind(inventory);
const boundRemove = inventory.remove.bind(inventory);

invokeInventoryAction("Аптечка", boundAdd);
// // Invoking action on Аптечка
// // Adding Аптечка to inventory

console.log(inventory.items); // ['Монорельса', 'Фильтр', 'Аптечка']

invokeInventoryAction("Фильтр", boundRemove);
// // Invoking action on Фильтр
// // Removing Фильтр from inventory

console.log(inventory.items); // ['Монорельса', 'Аптечка']

const bindFunction = invokeInventoryOperation.bind(
    inventory,
    "Аптечка",
    inventory.add
);

bindFunction();
invokeInventoryOperation.call(inventory, "Фильтр", inventory.remove);
}