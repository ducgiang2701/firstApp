export interface SimpleDataType {
  // defiphoneatever you want to display in UI at least 4 properties.
  id: string;
  imageURl?: string;
  price?: number;
  quantity?: number;
}

export type ItemType = {
  title?: string;
  data?: SimpleDataType;
  child?: ItemType[];
};

function generateList() {
  return [
    {
      title: 'Laptop',
      data: {
        id: 'LT1',
        imageURL: '',
        quatity: 500,
      },
      child: [
        {
          title: 'Dell',
          data: {id: 'D1', imageURL: 'ảnh logo Dell', quantity: 100},
          //item Laptop
          child: [
            {
              title: 'Dell 1',
              data: {
                id: 'D1.1',
                imageURL: '1',
                price: 12,
                quantity: 20,
              },
            },
            {
              title: 'Dell 2',
              data: {
                id: 'D2.2',
                imageURL: '2',
                price: 12,
                quantity: 20,
              },
            },
            {
              title: 'Dell 3',
              data: {
                id: 'D3.3',
                imageURL: '3',
                price: 12,
                quantity: 20,
              },
            },
            {
              title: 'Dell 4',
              data: {
                id: 'D4.4',
                imageURL: '4',
                price: 12,
                quantity: 20,
              },
            },
            {
              title: 'Dell 5',
              data: {
                id: 'D5.5',
                imageURL: '5',
                price: 12,
                quantity: 20,
              },
            },
            {
              title: 'Dell 6',
              data: {
                id: 'D6.6',
                imageURL: '6',
                price: 12,
                quantity: 0,
              },
            },
          ],
        },
        {
          title: 'Asus',
          data: {id: 'A1', imageURL: 'ảnh logo Asus', quantity: 100},
          //item Laptop
          child: [
            {
              title: 'Asus 1',
              data: {
                id: 'A1.1',
                imageURL: '1',
                price: 12,
                quantity: 20,
              },
            },
            {
              title: 'Asus 2',
              data: {
                id: 'A2.2',
                imageURL: '2',
                price: 12,
                quantity: 20,
              },
            },
            {
              title: 'Asus 3',
              data: {
                id: 'A3.3',
                imageURL: '3',
                price: 12,
                quantity: 20,
              },
            },
            {
              title: 'Asus 4',
              data: {
                id: 'A4.4',
                imageURL: '4',
                price: 12,
                quantity: 20,
              },
            },
            {
              title: 'Asus 5',
              data: {
                id: 'A5.5',
                imageURL: '5',
                price: 12,
                quantity: 20,
              },
            },
            {
              title: 'Asus 6',
              data: {
                id: 'A6.6',
                imageURL: '6',
                price: 12,
                quantity: 0,
              },
            },
          ],
        },
        {
          title: 'Macbook',
          data: {id: 'M1', imageURL: 'ảnh logo Macbook', quantity: 100},
          //item Laptop
          child: [
            {
              title: 'Macbook 1',
              data: {
                id: 'M1.1',
                imageURL: '1',
                price: 12,
                quantity: 100,
              },
            },
            {
              title: 'Macbook 2',
              data: {
                id: 'M2.2',
                imageURL: '2',
                price: 12,
                quantity: 80,
              },
            },
            {
              title: 'Macbook 3',
              data: {
                id: 'M3.3',
                imageURL: '3',
                price: 12,
                quantity: 90,
              },
            },
            {
              title: 'Macbook 4',
              data: {
                id: 'M4.4',
                imageURL: '4',
                price: 12,
                quantity: 90,
              },
            },
            {
              title: 'Macbook 5',
              data: {
                id: 'M5.5',
                imageURL: '5',
                price: 12,
                quantity: 90,
              },
            },
            {
              title: 'Macbook 6',
              data: {
                id: 'M6.6',
                imageURL: '6',
                price: 12,
                quantity: 90,
              },
            },
          ],
        },
        {
          title: 'Hp',
          data: {id: 'H1', imageURL: 'ảnh logo Hp', quantity: 100},
          //item Laptop
          child: [
            {
              title: 'Hp 1',
              data: {
                id: 'H1.1',
                imageURL: '1',
                price: 12,
                quantity: 100,
              },
            },
            {
              title: 'Hp 2',
              data: {
                id: 'H2.2',
                imageURL: '2',
                price: 12,
                quantity: 80,
              },
            },
            {
              title: 'Hp 3',
              data: {
                id: 'H3.3',
                imageURL: '3',
                price: 12,
                quantity: 90,
              },
            },
            {
              title: 'Hp 4',
              data: {
                id: 'H4.4',
                imageURL: '4',
                price: 12,
                quantity: 90,
              },
            },
            {
              title: 'Hp 5',
              data: {
                id: 'H5.5',
                imageURL: '5',
                price: 12,
                quantity: 90,
              },
            },
            {
              title: 'Hp 6',
              data: {
                id: 'H6.6',
                imageURL: '6',
                price: 12,
                quantity: 90,
              },
            },
          ],
        },
        {
          title: 'MSI',
          data: {id: 'MS1', imageURL: 'ảnh logo MSI', quantity: 100},
          //item Laptop
          child: [
            {
              title: 'MSI 1',
              data: {
                id: 'MS1.1',
                imageURL: '1',
                price: 12,
                quantity: 100,
              },
            },
            {
              title: 'MSI 2',
              data: {
                id: 'MS2.2',
                imageURL: '2',
                price: 12,
                quantity: 80,
              },
            },
            {
              title: 'MSI 3',
              data: {
                id: 'MS3.3',
                imageURL: '3',
                price: 12,
                quantity: 90,
              },
            },
            {
              title: 'MSI 4',
              data: {
                id: 'MS4.4',
                imageURL: '4',
                price: 12,
                quantity: 90,
              },
            },
            {
              title: 'MSI 5',
              data: {
                id: 'MS5.5',
                imageURL: '5',
                price: 12,
                quantity: 90,
              },
            },
            {
              title: 'MSI 6',
              data: {
                id: 'MS6.6',
                imageURL: '6',
                price: 12,
                quantity: 90,
              },
            },
          ],
        },
      ],
    },
    {
      title: 'Phone',
      data: {
        id: '1',
        imageURL: '',
        quatity: 200,
      },
      child: [
        {
          title: 'Iphone',
          data: {id: '1', imageURL: 'ảnh logo iphone', quantity: 100},
          //item Laptop
          child: [
            {
              title: 'iphone 1',
              data: {
                id: '1',
                imageURL: '1',
                price: 12,
                quantity: 20,
              },
            },
            {
              title: 'iphone 2',
              data: {
                id: '2',
                imageURL: '2',
                price: 12,
                quantity: 20,
              },
            },
            {
              title: 'iphone 3',
              data: {
                id: '3',
                imageURL: '3',
                price: 12,
                quantity: 20,
              },
            },
            {
              title: 'iphone 4',
              data: {
                id: '4',
                imageURL: '4',
                price: 12,
                quantity: 20,
              },
            },
            {
              title: 'iphone 5',
              data: {
                id: '5',
                imageURL: '5',
                price: 12,
                quantity: 20,
              },
            },
            {
              title: 'iphone 6',
              data: {
                id: '6',
                imageURL: '6',
                price: 12,
                quantity: 0,
              },
            },
          ],
        },
        {
          title: 'Samsung',
          data: {id: '1', imageURL: 'ảnh logo Samsung', quantity: 100},
          //item Laptop
          child: [
            {
              title: 'Samsung 1',
              data: {
                id: '1',
                imageURL: '1',
                price: 12,
                quantity: 20,
              },
            },
            {
              title: 'Samsung 2',
              data: {
                id: '2',
                imageURL: '2',
                price: 12,
                quantity: 20,
              },
            },
            {
              title: 'Samsung 3',
              data: {
                id: '3',
                imageURL: '3',
                price: 12,
                quantity: 20,
              },
            },
            {
              title: 'Samsung 4',
              data: {
                id: '4',
                imageURL: '4',
                price: 12,
                quantity: 20,
              },
            },
            {
              title: 'Samsung 5',
              data: {
                id: '5',
                imageURL: '5',
                price: 12,
                quantity: 20,
              },
            },
            {
              title: 'Samsung 6',
              data: {
                id: '6',
                imageURL: '6',
                price: 12,
                quantity: 0,
              },
            },
          ],
        },
        {
          title: 'Oppo',
          data: {id: '1', imageURL: 'ảnh logo Oppo', quantity: 100},
          //item Laptop
          child: [
            {
              title: 'Oppo 1',
              data: {
                id: '1',
                imageURL: '1',
                price: 12,
                quantity: 100,
              },
            },
            {
              title: 'Oppo 2',
              data: {
                id: '2',
                imageURL: '2',
                price: 12,
                quantity: 80,
              },
            },
            {
              title: 'Oppo 3',
              data: {
                id: '3',
                imageURL: '3',
                price: 12,
                quantity: 90,
              },
            },
            {
              title: 'Oppo 4',
              data: {
                id: '4',
                imageURL: '4',
                price: 12,
                quantity: 90,
              },
            },
            {
              title: 'Oppo 5',
              data: {
                id: '5',
                imageURL: '5',
                price: 12,
                quantity: 90,
              },
            },
            {
              title: 'Oppo 6',
              data: {
                id: '6',
                imageURL: '6',
                price: 12,
                quantity: 90,
              },
            },
          ],
        },
      ],
    },
  ];
}
