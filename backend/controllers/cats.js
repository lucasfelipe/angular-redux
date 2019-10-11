

var _ = require('lodash');

let cats = [
    {
        id: 1,
        text: 'Gato Muito Louco',
        type: 'Felino',
        upvotes: 3
    },
    {
        id: 2,
        text: 'Gato Very Crazy',
        type: 'Felino',
        upvotes: 8
    }
];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

index = async (req, res) => {
    await sleep(2000);
    res.status(200).json({ success: { cats } });
};

save = (req, res) => {
    let cat = req.body;

    cat._id = cats.length + 1;

    cats = cats.concat(cat);

    const last = _.last(cats);

    res.status(200).json({ success: { cat: last } });
};

update = (req, res) => {
    const { id } = req.params;
    const { cat } = req.body;

    cats = cats.map(c => {
        if (Object.is(c.id, id)) {
            return cat;
        }
        return c;
    });

    res.status(200).json({ success: { cat } });

};

remove = (req, res) => {
  const { id } = req.params;
  cats = cats.filter(c => !Object.is(c.id, id));
  res.status(200).json({ success: {message: 'removed'} });
};

module.exports = {
  index,
  save,
  update,
  remove
};
