import { useState } from 'react';
import Divider from 'shared/components/Divider';

function AdditionalInformation() {
  const [tab, setTab] = useState(0);
  const data = ['Description', 'Customer Preview(5)', 'Additional information'];

  const handleTab = (index: number) => {
    setTab(index);
  };

  return (
    <div>
      <div className="flex gap-10 justify-center  text-2xl text-slate-400">
        {data.map((i, index) => {
          return (
            <div
              key={i}
              onClick={() => handleTab(index)}
              className={`cursor-pointer border-b-2 ${
                index === tab ? 'border-red-500' : 'border-none'
              } pb-5`}
            >
              <p>{i}</p>
            </div>
          );
        })}
      </div>
      <Divider />
      <div className="py-9">
        {tab === 0 && (
          <p>
            A Pocket PC is a handheld computer, which features many of the same
            capabilities as a modern PC. These handy little devices allow
            individuals to retrieve and store e-mail messages, create a contact
            file, coordinate appointments, surf the internet, exchange text
            messages and more. Every product that is labeled as a Pocket PC must
            be accompanied with specific software to operate the unit and must
            feature a touchscreen and touchpad. As is the case with any new
            technology product, the cost of a Pocket PC was substantial during
            it’s early release. For approximately $700.00, consumers could
            purchase one of top-of-the-line Pocket PCs in 2003. These days,
            customers are finding that prices have become much more reasonable
            now that the newness is wearing off. For approximately $350.00, a
            new Pocket PC can now be purchased.
          </p>
        )}
        {tab === 1 && (
          <p>
            Polyester is deemed lower quality due to its none natural quality’s.
            Made from synthetic materials, not natural like wool. Polyester
            suits become creased easily and are known for not being breathable.
            Polyester suits tend to have a shine to them compared to wool and
            cotton suits, this can make the suit look cheap. The texture of
            velvet is luxurious and breathable. Velvet is a great choice for
            dinner party jacket and can be worn all year round.
          </p>
        )}
        {tab === 2 && (
          <p>
            A Pocket PC is a handheld computer, which features many of the same
            capabilities as a modern PC. These handy little devices allow
            individuals to retrieve and store e-mail messages, create a contact
            file, coordinate appointments, surf the internet, exchange text
            messages and more. Every product that is labeled as a Pocket PC must
            be accompanied with specific software to operate the unit and must
            feature a touchscreen and touchpad. As is the case with any new
            technology product, the cost of a Pocket PC was substantial during
            it’s early release. For approximately $700.00, consumers could
            purchase one of top-of-the-line Pocket PCs in 2003. These days,
            customers are finding that prices have become much more reasonable
            now that the newness is wearing off. For approximately $350.00, a
            new Pocket PC can now be purchased.
          </p>
        )}
      </div>
    </div>
  );
}

export default AdditionalInformation;
