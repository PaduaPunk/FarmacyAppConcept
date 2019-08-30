import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';

@Component({
  selector: 'page-local-weather',
  templateUrl: 'local-weather.html',
  
})
export class LocalWeatherPage {

  imageURI:any;
  imageFileName:any;
  index=0;
  catalogo = [
  {
    "Clave": "CVPT0001",
    "Categoria": "ANTIBIOTICOS",
    "Producto": "AMPICILINA",
    "Presentacion": "FASCO X 2 GR",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 21077,
    "Preciounitariomayoristas": 21077,
    "PreciounitarioDistribuidor": 22583
  },
  {
    "Clave": "CVPT0003",
    "Categoria": "ANTIPARASITARIOS",
    "Producto": "CALOXFEN",
    "Presentacion": "JERINGA DOSIFICADA X 10 ml",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 4865,
    "Preciounitariomayoristas": 4865,
    "PreciounitarioDistribuidor": 5213
  },
  {
    "Clave": "CVPT0004",
    "Categoria": "ANTIPARASITARIOS",
    "Producto": "CALOXFEN",
    "Presentacion": "JERINGA DOSIFICADA X 20 ml",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 6895,
    "Preciounitariomayoristas": 6895,
    "PreciounitarioDistribuidor": 7388
  },
  {
    "Clave": "CVPT0005",
    "Categoria": "ANTIPARASITARIOS",
    "Producto": "CALOXFEN",
    "Presentacion": "FASCO X 100 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 18788,
    "Preciounitariomayoristas": 18788,
    "PreciounitarioDistribuidor": 20130
  },
  {
    "Clave": "CVPT0006",
    "Categoria": "ANTIPARASITARIOS",
    "Producto": "CALOXFEN",
    "Presentacion": "FASCO X 500 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 64386,
    "Preciounitariomayoristas": 64386,
    "PreciounitarioDistribuidor": 68985
  },
  {
    "Clave": "CVPT0007",
    "Categoria": "ANTIPARASITARIOS",
    "Producto": "CALOXFEN",
    "Presentacion": "GARRAFA X 1000 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 118881,
    "Preciounitariomayoristas": 118881,
    "PreciounitarioDistribuidor": 127373
  },
  {
    "Clave": "CVPT0008",
    "Categoria": "ANTIPARASITARIOS",
    "Producto": "CALOXFEN",
    "Presentacion": "GARRAFA X 2000 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 212394,
    "Preciounitariomayoristas": 212394,
    "PreciounitarioDistribuidor": 227565
  },
  {
    "Clave": "CVPT0012",
    "Categoria": "ANTIPARASITARIOS",
    "Producto": "CALOXOL",
    "Presentacion": "JERINGA DOSIFICADA X 10 ml",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 4725,
    "Preciounitariomayoristas": 4725,
    "PreciounitarioDistribuidor": 5063
  },
  {
    "Clave": "CVPT0013",
    "Categoria": "ANTIPARASITARIOS",
    "Producto": "CALOXOL",
    "Presentacion": "JERINGA DOSIFICADA X 20 ml",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 5754,
    "Preciounitariomayoristas": 5754,
    "PreciounitarioDistribuidor": 6165
  },
  {
    "Clave": "CVPT0014",
    "Categoria": "ANTIPARASITARIOS",
    "Producto": "CALOXOL",
    "Presentacion": "FASCO X 100 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 17633,
    "Preciounitariomayoristas": 17633,
    "PreciounitarioDistribuidor": 18893
  },
  {
    "Clave": "CVPT0015",
    "Categoria": "ANTIPARASITARIOS",
    "Producto": "CALOXOL",
    "Presentacion": "FASCO X 500 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 61754,
    "Preciounitariomayoristas": 61754,
    "PreciounitarioDistribuidor": 66165
  },
  {
    "Clave": "CVPT0016",
    "Categoria": "ANTIPARASITARIOS",
    "Producto": "CALOXOL",
    "Presentacion": "GARRAFA X 1000 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 106022,
    "Preciounitariomayoristas": 106022,
    "PreciounitarioDistribuidor": 113595
  },
  {
    "Clave": "CVPT0017",
    "Categoria": "ANTIPARASITARIOS",
    "Producto": "CALOXOL",
    "Presentacion": "GARRAFA X 2000 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 176099,
    "Preciounitariomayoristas": 176099,
    "PreciounitarioDistribuidor": 188678
  },
  {
    "Clave": "CVPT0018",
    "Categoria": "ANTIPARASITARIOS",
    "Producto": "ENDOMECTIN 1%",
    "Presentacion": "FASCO X 10 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 4760,
    "Preciounitariomayoristas": 4760,
    "PreciounitarioDistribuidor": 5100
  },
  {
    "Clave": "CVPT0019",
    "Categoria": "ANTIPARASITARIOS",
    "Producto": "ENDOMECTIN 1%",
    "Presentacion": "FASCO X 50 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 9044,
    "Preciounitariomayoristas": 9044,
    "PreciounitarioDistribuidor": 9690
  },
  {
    "Clave": "CVPT0020",
    "Categoria": "ANTIPARASITARIOS",
    "Producto": "ENDOMECTIN 1%",
    "Presentacion": "FASCO X 100 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 16870,
    "Preciounitariomayoristas": 16870,
    "PreciounitarioDistribuidor": 18075
  },
  {
    "Clave": "CVPT0021",
    "Categoria": "ANTIPARASITARIOS",
    "Producto": "ENDOMECTIN 1%",
    "Presentacion": "FASCO X 500 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 48650,
    "Preciounitariomayoristas": 48650,
    "PreciounitarioDistribuidor": 52125
  },
  {
    "Clave": "CVPT0022",
    "Categoria": "ANTIPARASITARIOS",
    "Producto": "ENDOMECTIN 3.5%",
    "Presentacion": "FASCO X 10 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 6594,
    "Preciounitariomayoristas": 6594,
    "PreciounitarioDistribuidor": 7065
  },
  {
    "Clave": "CVPT0024",
    "Categoria": "ANTIPARASITARIOS",
    "Producto": "ENDOMECTIN 3.5%",
    "Presentacion": "FASCO X 50 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 34489,
    "Preciounitariomayoristas": 34489,
    "PreciounitarioDistribuidor": 36953
  },
  {
    "Clave": "CVPT0025",
    "Categoria": "ANTIPARASITARIOS",
    "Producto": "ENDOMECTIN 3.5%",
    "Presentacion": "FASCO X 500 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 134260,
    "Preciounitariomayoristas": 134260,
    "PreciounitarioDistribuidor": 143850
  },
  {
    "Clave": "CVPT0026",
    "Categoria": "ANTIPARASITARIOS",
    "Producto": "ENDOMECTIN 3.5%",
    "Presentacion": "FASCO X 240 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 8708,
    "Preciounitariomayoristas": 8708,
    "PreciounitarioDistribuidor": 9330
  },
  {
    "Clave": "CVPT0026",
    "Categoria": "ANTIBIOTICOS",
    "Producto": "ENROFIN 5%",
    "Presentacion": "FASCO X 10 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 8708,
    "Preciounitariomayoristas": 8708,
    "PreciounitarioDistribuidor": 9330
  },
  {
    "Clave": "CVPT0027",
    "Categoria": "ANTIBIOTICOS",
    "Producto": "ENROFIN 5%",
    "Presentacion": "FASCO X 50 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 26712,
    "Preciounitariomayoristas": 26712,
    "PreciounitarioDistribuidor": 28620
  },
  {
    "Clave": "CVPT0028",
    "Categoria": "ANTIPARASITARIOS",
    "Producto": "ENDOMECTIN 1%",
    "Presentacion": "FASCO X 240 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 48090,
    "Preciounitariomayoristas": 48090,
    "PreciounitarioDistribuidor": 51525
  },
  {
    "Clave": "CVPT0028",
    "Categoria": "ANTIBIOTICOS",
    "Producto": "ENROFIN 5%",
    "Presentacion": "FASCO X 100 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 48090,
    "Preciounitariomayoristas": 48090,
    "PreciounitarioDistribuidor": 51525
  },
  {
    "Clave": "CVPT0029",
    "Categoria": "ANTIPARASITARIOS",
    "Producto": "ENDOMECTIN 3.5%",
    "Presentacion": "FASCO X 100 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 4655,
    "Preciounitariomayoristas": 4655,
    "PreciounitarioDistribuidor": 4988
  },
  {
    "Clave": "CVPT0029",
    "Categoria": "ANTIBIOTICOS",
    "Producto": "ENROVIAR 10% ORAL",
    "Presentacion": "FASCO GOTERO X 10 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 4655,
    "Preciounitariomayoristas": 4655,
    "PreciounitarioDistribuidor": 4988
  },
  {
    "Clave": "CVPT0030",
    "Categoria": "ANTIBIOTICOS",
    "Producto": "ENROVIAR 10% ORAL",
    "Presentacion": "FASCO X 50 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 11648,
    "Preciounitariomayoristas": 11648,
    "PreciounitarioDistribuidor": 12480
  },
  {
    "Clave": "CVPT0031",
    "Categoria": "ANTIBIOTICOS",
    "Producto": "ENROVIAR 10% ORAL",
    "Presentacion": "FASCO X 250 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 20174,
    "Preciounitariomayoristas": 20174,
    "PreciounitarioDistribuidor": 21615
  },
  {
    "Clave": "CVPT0032",
    "Categoria": "ANTIBIOTICOS",
    "Producto": "ENROVIAR 10% ORAL",
    "Presentacion": "FASCO X 1000 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 45038,
    "Preciounitariomayoristas": 45038,
    "PreciounitarioDistribuidor": 48255
  },
  {
    "Clave": "CVPT0033",
    "Categoria": "ANTIPARASITARIOS",
    "Producto": "GOLD-D X 20ML",
    "Presentacion": "JERINGA  X 20 ml",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 9310,
    "Preciounitariomayoristas": 9310,
    "PreciounitarioDistribuidor": 9975
  },
  {
    "Clave": "CVPT0035",
    "Categoria": "ANTIBIOTICOS",
    "Producto": "OXITETRACICLINA 5%",
    "Presentacion": "FASCO X 10 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 4312,
    "Preciounitariomayoristas": 4312,
    "PreciounitarioDistribuidor": 4620
  },
  {
    "Clave": "CVPT0036",
    "Categoria": "ANTIBIOTICOS",
    "Producto": "OXITETRACICLINA 5%",
    "Presentacion": "FASCO X 50 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 5075,
    "Preciounitariomayoristas": 5075,
    "PreciounitarioDistribuidor": 5438
  },
  {
    "Clave": "CVPT0037",
    "Categoria": "ANTIBIOTICOS",
    "Producto": "OXITETRACICLINA 5%",
    "Presentacion": "FASCO X 100 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 8792,
    "Preciounitariomayoristas": 8792,
    "PreciounitarioDistribuidor": 9420
  },
  {
    "Clave": "CVPT0038",
    "Categoria": "ANTIBIOTICOS",
    "Producto": "OXITETRACICLINA 5%",
    "Presentacion": "FASCO X 250 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 13146,
    "Preciounitariomayoristas": 13146,
    "PreciounitarioDistribuidor": 14085
  },
  {
    "Clave": "CVPT0039",
    "Categoria": "ANTIPARASITARIOS",
    "Producto": "YECTOZOL",
    "Presentacion": "FASCO X 10 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 20104,
    "Preciounitariomayoristas": 20104,
    "PreciounitarioDistribuidor": 21540
  },
  {
    "Clave": "CVPT0039",
    "Categoria": "ANTIBIOTICOS",
    "Producto": "OXITETRACICLINA 5%",
    "Presentacion": "FASCO X 500 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 20104,
    "Preciounitariomayoristas": 20104,
    "PreciounitarioDistribuidor": 21540
  },
  {
    "Clave": "CVPT0040",
    "Categoria": "ANTIPARASITARIOS",
    "Producto": "YECTOZOL",
    "Presentacion": "FASCO X 50 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 5103,
    "Preciounitariomayoristas": 5103,
    "PreciounitarioDistribuidor": 5468
  },
  {
    "Clave": "CVPT0041",
    "Categoria": "ANTIPARASITARIOS",
    "Producto": "YECTOZOL",
    "Presentacion": "FASCO X 100 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 12418,
    "Preciounitariomayoristas": 12418,
    "PreciounitarioDistribuidor": 13305
  },
  {
    "Clave": "CVPT0042",
    "Categoria": "ANTIPARASITARIOS",
    "Producto": "YECTOZOL",
    "Presentacion": "FASCO X 250 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 23093,
    "Preciounitariomayoristas": 23093,
    "PreciounitarioDistribuidor": 24743
  },
  {
    "Clave": "CVPT0043",
    "Categoria": "ANTIPARASITARIOS",
    "Producto": "YECTOZOL",
    "Presentacion": "FASCO X 500 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 44261,
    "Preciounitariomayoristas": 44261,
    "PreciounitarioDistribuidor": 47423
  },
  {
    "Clave": "CVPT0045",
    "Categoria": "MASCOTAS",
    "Producto": "PHAMOCAN",
    "Presentacion": "Jeringa x 2 mL",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 3017,
    "Preciounitariomayoristas": 3017,
    "PreciounitarioDistribuidor": 3233
  },
  {
    "Clave": "CVPT0046",
    "Categoria": "MASCOTAS",
    "Producto": "PHAMOCAN",
    "Presentacion": "JerInga x 5 mL",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 4319,
    "Preciounitariomayoristas": 4319,
    "PreciounitarioDistribuidor": 4628
  },
  {
    "Clave": "CVPT0051",
    "Categoria": "VITAMINAS Y MINERALES",
    "Producto": "VITAMINA A",
    "Presentacion": "FASCO X 20 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 18067,
    "Preciounitariomayoristas": 18067,
    "PreciounitarioDistribuidor": 19358
  },
  {
    "Clave": "CVPT0052",
    "Categoria": "MASCOTAS",
    "Producto": "IVERMECTINA 6 MG",
    "Presentacion": "Caja x 24 Tab.",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 33530,
    "Preciounitariomayoristas": 33530,
    "PreciounitarioDistribuidor": 35925
  },
  {
    "Clave": "CVPT0052",
    "Categoria": "VITAMINAS Y MINERALES",
    "Producto": "VITAMINA A",
    "Presentacion": "FASCO X 50 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 33530,
    "Preciounitariomayoristas": 33530,
    "PreciounitarioDistribuidor": 35925
  },
  {
    "Clave": "CVPT0053",
    "Categoria": "ANTIPARASITARIOS",
    "Producto": "HEMOLOX",
    "Presentacion": "FASCO X 240 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 55853,
    "Preciounitariomayoristas": 55853,
    "PreciounitarioDistribuidor": 59843
  },
  {
    "Clave": "CVPT0053",
    "Categoria": "VITAMINAS Y MINERALES",
    "Producto": "VITAMINA A",
    "Presentacion": "FASCO X 100 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 55853,
    "Preciounitariomayoristas": 55853,
    "PreciounitarioDistribuidor": 59843
  },
  {
    "Clave": "CVPT0054",
    "Categoria": "VITAMINAS Y MINERALES",
    "Producto": "VITAMINA A",
    "Presentacion": "FASCO X 250 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 112679,
    "Preciounitariomayoristas": 112679,
    "PreciounitarioDistribuidor": 120728
  },
  {
    "Clave": "CVPT0055",
    "Categoria": "VITAMINAS Y MINERALES",
    "Producto": "VITACALOX GRANULADO",
    "Presentacion": "BOLSA X 60 G",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 18438,
    "Preciounitariomayoristas": 18438,
    "PreciounitarioDistribuidor": 19755
  },
  {
    "Clave": "CVPT0058",
    "Categoria": "ANTIBIOTICOS",
    "Producto": "OXITETRACICLINA 200LA",
    "Presentacion": "FASCO X 10 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 71820,
    "Preciounitariomayoristas": 71820,
    "PreciounitarioDistribuidor": 76950
  },
  {
    "Clave": "CVPT0059",
    "Categoria": "ANTIPARASITARIOS",
    "Producto": "HEMOLOX",
    "Presentacion": "FASCO X 100 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 32501,
    "Preciounitariomayoristas": 32501,
    "PreciounitarioDistribuidor": 34823
  },
  {
    "Clave": "CVPT0059",
    "Categoria": "ANTIBIOTICOS",
    "Producto": "OXITETRACICLINA 200LA",
    "Presentacion": "FASCO X 50 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 32501,
    "Preciounitariomayoristas": 32501,
    "PreciounitarioDistribuidor": 34823
  },
  {
    "Clave": "CVPT0060",
    "Categoria": "ANTIPARASITARIOS",
    "Producto": "HEMOLOX",
    "Presentacion": "FASCO X 500 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 128884,
    "Preciounitariomayoristas": 128884,
    "PreciounitarioDistribuidor": 138090
  },
  {
    "Clave": "CVPT0060",
    "Categoria": "ANTIBIOTICOS",
    "Producto": "OXITETRACICLINA 200LA",
    "Presentacion": "FASCO X 100 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 128884,
    "Preciounitariomayoristas": 128884,
    "PreciounitarioDistribuidor": 138090
  },
  {
    "Clave": "CVPT0061",
    "Categoria": "ANTIBIOTICOS",
    "Producto": "AMPICILINA",
    "Presentacion": "FASCO X 4 GR",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 35742,
    "Preciounitariomayoristas": 35742,
    "PreciounitarioDistribuidor": 38295
  },
  {
    "Clave": "CVPT0061",
    "Categoria": "ANTIBIOTICOS",
    "Producto": "OXITETRACICLINA 200LA",
    "Presentacion": "FASCO X 250 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 35742,
    "Preciounitariomayoristas": 35742,
    "PreciounitarioDistribuidor": 38295
  },
  {
    "Clave": "CVPT0062",
    "Categoria": "ANTIBIOTICOS",
    "Producto": "OXITETRACICLINA 200LA",
    "Presentacion": "FASCO X 500 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 27783,
    "Preciounitariomayoristas": 27783,
    "PreciounitarioDistribuidor": 29768
  },
  {
    "Clave": "CVPT0063",
    "Categoria": "MASCOTAS",
    "Producto": "LORATADINA 10 MG",
    "Presentacion": "Caja x 10 Tab.",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 7154,
    "Preciounitariomayoristas": 7154,
    "PreciounitarioDistribuidor": 7665
  },
  {
    "Clave": "CVPT0063",
    "Categoria": "ANTIBIOTICOS",
    "Producto": "SULFADIAZINA  TRIMETROPINA",
    "Presentacion": "FASCO GOTERO X 10 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 7154,
    "Preciounitariomayoristas": 7154,
    "PreciounitarioDistribuidor": 7665
  },
  {
    "Clave": "CVPT0064",
    "Categoria": "MASCOTAS",
    "Producto": "PREDNISONA 5 MG",
    "Presentacion": "Caja x 10 Tab.",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 6580,
    "Preciounitariomayoristas": 6580,
    "PreciounitarioDistribuidor": 7050
  },
  {
    "Clave": "CVPT0064",
    "Categoria": "ANTIBIOTICOS",
    "Producto": "SULFADIAZINA  TRIMETROPINA",
    "Presentacion": "FASCO X 50 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 6580,
    "Preciounitariomayoristas": 6580,
    "PreciounitarioDistribuidor": 7050
  },
  {
    "Clave": "CVPT0065",
    "Categoria": "ANTIBIOTICOS",
    "Producto": "SULFADIAZINA  TRIMETROPINA",
    "Presentacion": "FASCO X 100 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 0,
    "Preciounitariomayoristas": 0,
    "PreciounitarioDistribuidor": 0
  },
  {
    "Clave": "CVPT0066",
    "Categoria": "MASCOTAS",
    "Producto": "ERLICLOX 100 MG",
    "Presentacion": "Caja x 10 Tab.",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 0,
    "Preciounitariomayoristas": 0,
    "PreciounitarioDistribuidor": 0
  },
  {
    "Clave": "CVPT0066",
    "Categoria": "ANTIBIOTICOS",
    "Producto": "SULFADIAZINA  TRIMETROPINA",
    "Presentacion": "FASCO X 250 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 0,
    "Preciounitariomayoristas": 0,
    "PreciounitarioDistribuidor": 0
  },
  {
    "Clave": "CVPT0067",
    "Categoria": "MASCOTAS",
    "Producto": "ERLICLOX 100 MG",
    "Presentacion": "Caja x 100 Tab.",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 0,
    "Preciounitariomayoristas": 0,
    "PreciounitarioDistribuidor": 0
  },
  {
    "Clave": "CVPT0067",
    "Categoria": "ANTIBIOTICOS",
    "Producto": "SULFADIAZINA  TRIMETROPINA",
    "Presentacion": "FASCO X 500 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 0,
    "Preciounitariomayoristas": 0,
    "PreciounitarioDistribuidor": 0
  },
  {
    "Clave": "CVPT0068",
    "Categoria": "MASCOTAS",
    "Producto": "CALOXDOL 2 MG",
    "Presentacion": "Caja x 10 Tab.",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 12796,
    "Preciounitariomayoristas": 12796,
    "PreciounitarioDistribuidor": 13710
  },
  {
    "Clave": "CVPT0069",
    "Categoria": "MASCOTAS",
    "Producto": "CALOXDOL 2 MG",
    "Presentacion": "Caja x 100 Tab.",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 112140,
    "Preciounitariomayoristas": 112140,
    "PreciounitarioDistribuidor": 120150
  },
  {
    "Clave": "CVPT0070",
    "Categoria": "MASCOTAS",
    "Producto": "CIPROVANCE 250",
    "Presentacion": "Caja x 10 Tab.",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 0,
    "Preciounitariomayoristas": 0,
    "PreciounitarioDistribuidor": 0
  },
  {
    "Clave": "CVPT0071",
    "Categoria": "MASCOTAS",
    "Producto": "CIPROVANCE 250",
    "Presentacion": "Caja x 100 Tab.",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 0,
    "Preciounitariomayoristas": 0,
    "PreciounitarioDistribuidor": 0
  },
  {
    "Clave": "CVPT0072",
    "Categoria": "MASCOTAS",
    "Producto": "PREDNISONA 50 MG",
    "Presentacion": "Caja x 10 Tab.",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 17290,
    "Preciounitariomayoristas": 17290,
    "PreciounitarioDistribuidor": 18525
  },
  {
    "Clave": "CVPT0073",
    "Categoria": "MASCOTAS",
    "Producto": "PREDNISONA 50 MG",
    "Presentacion": "Caja x 100 Tab.",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 161000,
    "Preciounitariomayoristas": 161000,
    "PreciounitarioDistribuidor": 172500
  },
  {
    "Clave": "CVPT0074",
    "Categoria": "VITAMINAS Y MINERALES",
    "Producto": "CONVER",
    "Presentacion": "FASCO X 50 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 0,
    "Preciounitariomayoristas": 0,
    "PreciounitarioDistribuidor": 0
  },
  {
    "Clave": "CVPT0075",
    "Categoria": "VITAMINAS Y MINERALES",
    "Producto": "CONVER",
    "Presentacion": "FASCO X 100 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 0,
    "Preciounitariomayoristas": 0,
    "PreciounitarioDistribuidor": 0
  },
  {
    "Clave": "CVPT0076",
    "Categoria": "VITAMINAS Y MINERALES",
    "Producto": "CONVER",
    "Presentacion": "FASCO X 250 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 0,
    "Preciounitariomayoristas": 0,
    "PreciounitarioDistribuidor": 0
  },
  {
    "Clave": "CVPT0077",
    "Categoria": "VITAMINAS Y MINERALES",
    "Producto": "CONVER",
    "Presentacion": "FASCO X 500 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 0,
    "Preciounitariomayoristas": 0,
    "PreciounitarioDistribuidor": 0
  },
  {
    "Clave": "CVPT0078",
    "Categoria": "ANTIBIOTICOS",
    "Producto": "HEMOTROM",
    "Presentacion": "Frasco x 20 mL",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 0,
    "Preciounitariomayoristas": 0,
    "PreciounitarioDistribuidor": 0
  },
  {
    "Clave": "CVPT0078",
    "Categoria": "VITAMINAS Y MINERALES",
    "Producto": "HEMATOBIOS B12",
    "Presentacion": "FASCO X 100 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 0,
    "Preciounitariomayoristas": 0,
    "PreciounitarioDistribuidor": 0
  },
  {
    "Clave": "CVPT0079",
    "Categoria": "ANTIBIOTICOS",
    "Producto": "HEMOTROM",
    "Presentacion": "Frasco x 50 mL",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 0,
    "Preciounitariomayoristas": 0,
    "PreciounitarioDistribuidor": 0
  },
  {
    "Clave": "CVPT0079",
    "Categoria": "VITAMINAS Y MINERALES",
    "Producto": "HEMATOBIOS B12",
    "Presentacion": "FASCO X 250 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 0,
    "Preciounitariomayoristas": 0,
    "PreciounitarioDistribuidor": 0
  },
  {
    "Clave": "CVPT0080",
    "Categoria": "VITAMINAS Y MINERALES",
    "Producto": "HEMATOBIOS B12",
    "Presentacion": "FASCO X 500 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 0,
    "Preciounitariomayoristas": 0,
    "PreciounitarioDistribuidor": 0
  },
  {
    "Clave": "CVPT0085",
    "Categoria": "VITAMINAS Y MINERALES",
    "Producto": "BPONQUIVET",
    "Presentacion": "FASCO X 120 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 7630,
    "Preciounitariomayoristas": 7630,
    "PreciounitarioDistribuidor": 8175
  },
  {
    "Clave": "CVPT0086",
    "Categoria": "VITAMINAS Y MINERALES",
    "Producto": "BPONQUIVET",
    "Presentacion": "FASCO X 240 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 13846,
    "Preciounitariomayoristas": 13846,
    "PreciounitarioDistribuidor": 14835
  },
  {
    "Clave": "CVPT0092",
    "Categoria": "ANTIBIOTICOS",
    "Producto": "KETOCOL 10%",
    "Presentacion": "Frasco x 10 mL",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 7630,
    "Preciounitariomayoristas": 7630,
    "PreciounitarioDistribuidor": 8175
  },
  {
    "Clave": "CVPT0093",
    "Categoria": "ANTIBIOTICOS",
    "Producto": "KETOCOL 10%",
    "Presentacion": "Frasco x 50 mL",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 13846,
    "Preciounitariomayoristas": 13846,
    "PreciounitarioDistribuidor": 14835
  },
  {
    "Clave": "CVPT0094",
    "Categoria": "ANTIPARASITARIOS",
    "Producto": "HEMOLOX",
    "Presentacion": "FASCO X 50 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 7630,
    "Preciounitariomayoristas": 7630,
    "PreciounitarioDistribuidor": 8175
  },
  {
    "Clave": "CVPT0094",
    "Categoria": "ANTIBIOTICOS",
    "Producto": "VITHIPEN",
    "Presentacion": "FASCO X 1, 500, 000 UL",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 7630,
    "Preciounitariomayoristas": 7630,
    "PreciounitarioDistribuidor": 8175
  },
  {
    "Clave": "CVPT0095",
    "Categoria": "ANTIBIOTICOS",
    "Producto": "VITHIPEN",
    "Presentacion": "FASCO X 3, 000, 000 UL",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 10780,
    "Preciounitariomayoristas": 10780,
    "PreciounitarioDistribuidor": 11550
  },
  {
    "Clave": "CVPT0096",
    "Categoria": "ANTIBIOTICOS",
    "Producto": "VITHIPEN",
    "Presentacion": "FASCO X 6, 000, 000 UL",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 17920,
    "Preciounitariomayoristas": 17920,
    "PreciounitarioDistribuidor": 19200
  },
  {
    "Clave": "CVPT0097",
    "Categoria": "ANTIBIOTICOS",
    "Producto": "VITHIPEN",
    "Presentacion": "FASCO X 9, 000, 000 UL",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 21140,
    "Preciounitariomayoristas": 21140,
    "PreciounitarioDistribuidor": 22650
  },
  {
    "Clave": "CVPT0098",
    "Categoria": "ANTIBIOTICOS",
    "Producto": "YODOSYN",
    "Presentacion": "Frasco x 120 mL",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 6860,
    "Preciounitariomayoristas": 6860,
    "PreciounitarioDistribuidor": 7350
  },
  {
    "Clave": "CVPT0099",
    "Categoria": "ANTIBIOTICOS",
    "Producto": "YODOSYN",
    "Presentacion": "Frasco x 500 mL",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 15890,
    "Preciounitariomayoristas": 15890,
    "PreciounitarioDistribuidor": 17025
  },
  {
    "Clave": "CVPT0100",
    "Categoria": "ANTIBIOTICOS",
    "Producto": "YODOSYN",
    "Presentacion": "Frasco x 1000 mL",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 31430,
    "Preciounitariomayoristas": 31430,
    "PreciounitarioDistribuidor": 33675
  },
  {
    "Clave": "CVPT0101",
    "Categoria": "ANTIBIOTICOS",
    "Producto": "MAMIDOL",
    "Presentacion": "Pomada 100 G",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 0,
    "Preciounitariomayoristas": 0,
    "PreciounitarioDistribuidor": 0
  },
  {
    "Clave": "CVPT0102",
    "Categoria": "ANTIBIOTICOS",
    "Producto": "MAMIDOL",
    "Presentacion": "Pomada 300 G",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 0,
    "Preciounitariomayoristas": 0,
    "PreciounitarioDistribuidor": 0
  },
  {
    "Clave": "CVPT0104",
    "Categoria": "MASCOTAS",
    "Producto": "DENTI-VET",
    "Presentacion": "Tubo x 35 G",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 0,
    "Preciounitariomayoristas": 0,
    "PreciounitarioDistribuidor": 0
  },
  {
    "Clave": "CVPT0105",
    "Categoria": "MASCOTAS",
    "Producto": "DERMATOSYN",
    "Presentacion": "Crema x 40 G",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 0,
    "Preciounitariomayoristas": 0,
    "PreciounitarioDistribuidor": 0
  },
  {
    "Clave": "CVPT0106",
    "Categoria": "ANTIBIOTICOS",
    "Producto": "KURAR",
    "Presentacion": "Frasco x 200 mL",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 0,
    "Preciounitariomayoristas": 0,
    "PreciounitarioDistribuidor": 0
  },
  {
    "Clave": "CVPT0107",
    "Categoria": "ANTIPARASITARIOS",
    "Producto": "TEMISOL INYECTABLE",
    "Presentacion": "FASCO X 20 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 7280,
    "Preciounitariomayoristas": 7280,
    "PreciounitarioDistribuidor": 7800
  },
  {
    "Clave": "CVPT0108",
    "Categoria": "ANTIPARASITARIOS",
    "Producto": "TEMISOL INYECTABLE",
    "Presentacion": "FASCO X 50 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 12068,
    "Preciounitariomayoristas": 12068,
    "PreciounitarioDistribuidor": 12930
  },
  {
    "Clave": "CVPT0109",
    "Categoria": "ANTIPARASITARIOS",
    "Producto": "TEMISOL INYECTABLE",
    "Presentacion": "FASCO X 240 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 23800,
    "Preciounitariomayoristas": 23800,
    "PreciounitarioDistribuidor": 25500
  },
  {
    "Clave": "CVPT0110",
    "Categoria": "ANTIPARASITARIOS",
    "Producto": "TEMISOL INYECTABLE",
    "Presentacion": "FASCO X 500 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 31360,
    "Preciounitariomayoristas": 31360,
    "PreciounitarioDistribuidor": 33600
  },
  {
    "Clave": "CVPT0111",
    "Categoria": "ANTIPARASITARIOS",
    "Producto": "TEMISOL ORAL",
    "Presentacion": "COJIN X 30 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 959,
    "Preciounitariomayoristas": 959,
    "PreciounitarioDistribuidor": 1028
  },
  {
    "Clave": "CVPT0112",
    "Categoria": "MASCOTAS",
    "Producto": "VETIDERMA SHAMPOO INSECTICIDA",
    "Presentacion": "Frasco x 60 mL",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 0,
    "Preciounitariomayoristas": 0,
    "PreciounitarioDistribuidor": 0
  },
  {
    "Clave": "CVPT0113",
    "Categoria": "MASCOTAS",
    "Producto": "VETIDERMA SHAMPOO MEDICADO",
    "Presentacion": "Frasco x 60 mL",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 0,
    "Preciounitariomayoristas": 0,
    "PreciounitarioDistribuidor": 0
  },
  {
    "Clave": "CVPT0114",
    "Categoria": "MASCOTAS",
    "Producto": "VETIDERMA SHAMPOO MEDICADO",
    "Presentacion": "Frasco x 200 mL",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 0,
    "Preciounitariomayoristas": 0,
    "PreciounitarioDistribuidor": 0
  },
  {
    "Clave": "CVPT0115",
    "Categoria": "MASCOTAS",
    "Producto": "VETIDERMA SHAMPOO ALCE",
    "Presentacion": "Frasco x 60 mL",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 0,
    "Preciounitariomayoristas": 0,
    "PreciounitarioDistribuidor": 0
  },
  {
    "Clave": "CVPT0116",
    "Categoria": "MASCOTAS",
    "Producto": "VETIDERMA SHAMPOO ALCE",
    "Presentacion": "Frasco x 200 mL",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 0,
    "Preciounitariomayoristas": 0,
    "PreciounitarioDistribuidor": 0
  },
  {
    "Clave": "CVPT0117",
    "Categoria": "MASCOTAS",
    "Producto": "VETIDERMA SHAMPOO MANZANILLA",
    "Presentacion": "Frasco x 60 mL",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 0,
    "Preciounitariomayoristas": 0,
    "PreciounitarioDistribuidor": 0
  },
  {
    "Clave": "CVPT0118",
    "Categoria": "MASCOTAS",
    "Producto": "VETIDERMA SHAMPOO MANZANILLA",
    "Presentacion": "Frasco x 200 mL",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 0,
    "Preciounitariomayoristas": 0,
    "PreciounitarioDistribuidor": 0
  },
  {
    "Clave": "CVPT0119",
    "Categoria": "VITAMINAS Y MINERALES",
    "Producto": "VITACALOX SUSPENSIÓN",
    "Presentacion": "SECHET X 30 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 0,
    "Preciounitariomayoristas": 0,
    "PreciounitarioDistribuidor": 0
  },
  {
    "Clave": "CVPT0120",
    "Categoria": "VITAMINAS Y MINERALES",
    "Producto": "VITACALOX SUSPENSIÓN",
    "Presentacion": "FASCO X 120 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 8820,
    "Preciounitariomayoristas": 8820,
    "PreciounitarioDistribuidor": 9450
  },
  {
    "Clave": "CVPT0121",
    "Categoria": "VITAMINAS Y MINERALES",
    "Producto": "VITACALOX SUSPENSIÓN",
    "Presentacion": "FASCO X 500 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 30310,
    "Preciounitariomayoristas": 30310,
    "PreciounitarioDistribuidor": 32475
  },
  {
    "Clave": "CVPT0122",
    "Categoria": "ANTIPARASITARIOS",
    "Producto": "TEMISOL INYECTABLE",
    "Presentacion": "FASCO X 100 ML",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 9072,
    "Preciounitariomayoristas": 9072,
    "PreciounitarioDistribuidor": 9720
  },
  {
    "Clave": "CVPT0123",
    "Categoria": "MASCOTAS",
    "Producto": "VETIDERMA SHAMPOO INSECTICIDA",
    "Presentacion": "Frasco x 200 mL",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 0,
    "Preciounitariomayoristas": 0,
    "PreciounitarioDistribuidor": 0
  },
  {
    "Clave": "CVPT0124",
    "Categoria": "MASCOTAS",
    "Producto": "VETIDERMA SHAMPOO INSECTICIDA",
    "Presentacion": "Frasco x 750 mL",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 0,
    "Preciounitariomayoristas": 0,
    "PreciounitarioDistribuidor": 0
  },
  {
    "Clave": "CVPT0125",
    "Categoria": "MASCOTAS",
    "Producto": "VETIDERMA SHAMPOO MEDICADO",
    "Presentacion": "Frasco x 750 mL",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 0,
    "Preciounitariomayoristas": 0,
    "PreciounitarioDistribuidor": 0
  },
  {
    "Clave": "CVPT0126",
    "Categoria": "MASCOTAS",
    "Producto": "VETIDERMA SHAMPOO ALCE",
    "Presentacion": "Frasco x 750 mL",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 0,
    "Preciounitariomayoristas": 0,
    "PreciounitarioDistribuidor": 0
  },
  {
    "Clave": "CVPT0127",
    "Categoria": "MASCOTAS",
    "Producto": "VETIDERMA SHAMPOO MANZANILLA",
    "Presentacion": "Frasco x 750 mL",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 0,
    "Preciounitariomayoristas": 0,
    "PreciounitarioDistribuidor": 0
  },
  {
    "Clave": "CVPT0131",
    "Categoria": "ANTIBIOTICOS",
    "Producto": "TESTO-DIONE",
    "Presentacion": "FASCO X 100 TABLETAS",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": 42000,
    "Preciounitariomayoristas": 42000,
    "PreciounitarioDistribuidor": 45000
  },
  {
    "Clave": "CVPT0139",
    "Categoria": "ANTIBIOTICOS",
    "Producto": "GALLOMIN",
    "Presentacion": "FASCO X 100 TABLETAS",
    "Cantidad": 0,
    "TotalUnitario": 0,
    "Preciobase": "",
    "Preciounitariomayoristas": "",
    "PreciounitarioDistribuidor": ""
  }
];

  constructor(public navCtrl: NavController,
    private transfer: FileTransfer,
    private camera: Camera,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController, public popoverCtrl: PopoverController) {}


  getImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      this.imageURI = imageData;
    }, (err) => {
      console.log(err);
      this.presentToast(err);
    });
  }

  cucumber: boolean;

  updateCucumber(myEvent, datosProducto, i) {
    console.log('Cucumbers new state:' + this.cucumber);
    console.log('Gera: ' + datosProducto)
    this.index=i;
    let popover = this.popoverCtrl.create(PopoverPage, {key1:datosProducto});
    popover.present({
      ev: myEvent
    });

    popover.onDidDismiss(data => {
      console.log("tamal: "+ data);
      if(data!=null){        
         console.log('pad'+this.catalogo[0].Cantidad);
         console.log('Cantidadi:'+data[0].Cantidad);
         console.log('Cantidadi:'+data[0].TotalUnitario);
         this.catalogo[this.index].Cantidad=data[0].Cantidad;
         this.catalogo[this.index].TotalUnitario=data[0].TotalUnitario;
      }
    });
  }


   

  uploadFile() {
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    loader.present();
    const fileTransfer: FileTransferObject = this.transfer.create();

    let options: FileUploadOptions = {
      fileKey: 'ionicfile',
      fileName: 'ionicfile',
      chunkedMode: false,
      mimeType: "image/jpeg",
      headers: {}
    }

    fileTransfer.upload(this.imageURI, 'http://192.168.0.7:8080/api/uploadImage', options)
      .then((data) => {
      console.log(data+" Uploaded Successfully");
      this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg"
      loader.dismiss();
      this.presentToast("Image uploaded successfully");
    }, (err) => {
      console.log(err);
      loader.dismiss();
      this.presentToast(err);
    });
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 6000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}