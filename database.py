from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base,sessionmaker


engine=create_engine('postgresql://postgres:Shilpa1966@localhost/pizza_hut',
                     echo=True
                     )

Base=declarative_base()

Session=sessionmaker()