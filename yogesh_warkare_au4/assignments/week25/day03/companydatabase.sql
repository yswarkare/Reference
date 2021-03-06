PGDMP     4                    x            companydatabase    12.2    12.2                 0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            !           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            "           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            #           1262    24636    companydatabase    DATABASE     �   CREATE DATABASE companydatabase WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
    DROP DATABASE companydatabase;
                postgres    false            �            1259    24650    company    TABLE     �   CREATE TABLE public.company (
    id integer NOT NULL,
    name text,
    address text,
    owner text,
    email text,
    phone integer,
    holidays text[],
    facilities text[]
);
    DROP TABLE public.company;
       public         heap    postgres    false            �            1259    24648    company_id_seq    SEQUENCE     �   CREATE SEQUENCE public.company_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.company_id_seq;
       public          postgres    false    203            $           0    0    company_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.company_id_seq OWNED BY public.company.id;
          public          postgres    false    202            �            1259    24661 
   department    TABLE     �   CREATE TABLE public.department (
    id integer NOT NULL,
    company_id integer,
    name text,
    strength integer,
    staff_details text
);
    DROP TABLE public.department;
       public         heap    postgres    false            �            1259    24659    department_id_seq    SEQUENCE     �   CREATE SEQUENCE public.department_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.department_id_seq;
       public          postgres    false    205            %           0    0    department_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.department_id_seq OWNED BY public.department.id;
          public          postgres    false    204            �            1259    24677    employee    TABLE       CREATE TABLE public.employee (
    id integer NOT NULL,
    name text,
    designation text,
    phone integer,
    email text,
    salary integer,
    benefits text[],
    company_id integer,
    department_id integer,
    things text[],
    expenses numeric
);
    DROP TABLE public.employee;
       public         heap    postgres    false            �            1259    24675    employee_id_seq    SEQUENCE     �   CREATE SEQUENCE public.employee_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.employee_id_seq;
       public          postgres    false    207            &           0    0    employee_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.employee_id_seq OWNED BY public.employee.id;
          public          postgres    false    206            �
           2604    24653 
   company id    DEFAULT     h   ALTER TABLE ONLY public.company ALTER COLUMN id SET DEFAULT nextval('public.company_id_seq'::regclass);
 9   ALTER TABLE public.company ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    203    202    203            �
           2604    24664    department id    DEFAULT     n   ALTER TABLE ONLY public.department ALTER COLUMN id SET DEFAULT nextval('public.department_id_seq'::regclass);
 <   ALTER TABLE public.department ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    204    205    205            �
           2604    24680    employee id    DEFAULT     j   ALTER TABLE ONLY public.employee ALTER COLUMN id SET DEFAULT nextval('public.employee_id_seq'::regclass);
 :   ALTER TABLE public.employee ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    207    206    207                      0    24650    company 
   TABLE DATA           _   COPY public.company (id, name, address, owner, email, phone, holidays, facilities) FROM stdin;
    public          postgres    false    203   u                 0    24661 
   department 
   TABLE DATA           S   COPY public.department (id, company_id, name, strength, staff_details) FROM stdin;
    public          postgres    false    205   F                  0    24677    employee 
   TABLE DATA           �   COPY public.employee (id, name, designation, phone, email, salary, benefits, company_id, department_id, things, expenses) FROM stdin;
    public          postgres    false    207   c        '           0    0    company_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.company_id_seq', 2, true);
          public          postgres    false    202            (           0    0    department_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.department_id_seq', 1, false);
          public          postgres    false    204            )           0    0    employee_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.employee_id_seq', 1, false);
          public          postgres    false    206            �
           2606    24658    company company_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.company
    ADD CONSTRAINT company_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.company DROP CONSTRAINT company_pkey;
       public            postgres    false    203            �
           2606    24669    department department_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.department
    ADD CONSTRAINT department_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.department DROP CONSTRAINT department_pkey;
       public            postgres    false    205            �
           2606    24685    employee employee_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.employee
    ADD CONSTRAINT employee_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.employee DROP CONSTRAINT employee_pkey;
       public            postgres    false    207            �
           2606    24670 %   department department_company_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.department
    ADD CONSTRAINT department_company_id_fkey FOREIGN KEY (company_id) REFERENCES public.company(id);
 O   ALTER TABLE ONLY public.department DROP CONSTRAINT department_company_id_fkey;
       public          postgres    false    203    205    2706            �
           2606    24686 !   employee employee_company_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.employee
    ADD CONSTRAINT employee_company_id_fkey FOREIGN KEY (company_id) REFERENCES public.company(id);
 K   ALTER TABLE ONLY public.employee DROP CONSTRAINT employee_company_id_fkey;
       public          postgres    false    207    203    2706            �
           2606    24691 $   employee employee_department_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.employee
    ADD CONSTRAINT employee_department_id_fkey FOREIGN KEY (department_id) REFERENCES public.department(id);
 N   ALTER TABLE ONLY public.employee DROP CONSTRAINT employee_department_id_fkey;
       public          postgres    false    205    2708    207               �   x���Aj�@E��)��&�9Ai�]JC�n�l�� �7	�{��@ȶ�����F��b}�/�fӮ�#-��L+<�$�p�(��#~�a�q���a&��`3��{ઔĔ��e �3����U92�4��:i�\�Ό�zN�B���;n�&��5~��
�(Jo�B�jM��i{�>����:��n{���7EQ� ��j�            x������ � �            x������ � �     