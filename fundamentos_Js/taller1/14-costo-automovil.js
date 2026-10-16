//calcular la ganancia del vendedor
//sumar la ganancia del valor del vehiculo = precio vna
//calcular el impuesto (6%) sobre el precio de venta
// sumar el precio de venta  + el impuesto = costo total

//valores definidos directamente por el enunciado del taller
const valorvehiculo= 35000000; // valor base del automovil
const porcentajeganancia = 12;
const porcentajeimpuesto = 6;

//paso 1. Calcular cuato dinero gana el vendedor
const gananciaVendedor = (valorvehiculo * porcentajeganancia) / 100;

//paso 2. el precio de venta es el valor del vehiculo mas la ganacia
const precioVenta = valorvehiculo + gananciaVendedor;

//paso 3. calcular el impuesto sobre el precio de venta (No sobre el vehículo original)
const impuestoVenta = (precioVenta * porcentajeimpuesto) / 100;

//paso 4. el costo toptal que paga el comprador es el precio de venta + impuesto
const costoTotal = precioVenta + impuestoVenta;

console.log("Valor del vehículo es: $" + valorvehiculo);
console.log("porcentaje de ganancia: ", porcentajeganancia + "%");
console.log("Ganancia del vendedor: $" + gananciaVendedor);
console.log("Precio de  venta antes de impuestos: $" + precioVenta);
console.log("porcentaje de impuesto: ", porcentajeimpuesto + "%");
console.log("Impuesto sobre el precio de venta: $" + impuestoVenta);
console.log("Costo total: $" + costoTotal);
